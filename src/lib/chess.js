const valid_piece_rgx = /^[prnbqkPRNBQK]$/;

function parse_fen(fen) {
    if (!fen) {
        throw new ReferenceError("FEN string not provided");
    }
    if (typeof fen !== "string") {
        throw new TypeError("Argument was not a string");
    }

    console.log(validate_fen(fen))
}

function validate_fen(fen) {
    // Tokens are wrapped in white space.
    const tokens = fen.split(/\s+/);

    // FEN string must contain six space-delimited fields.
    if (tokens.length !== 6) {
        return false;
    }
    // 6th field (50 move counter) must be a positive integer.
    if (isNaN(tokens[5]) || parseInt(tokens[5], 10) <= 0) {
        return false;
    }

    // 5th field (ply count) must be a positive integer.
    if (isNaN(tokens[4]) || (parseInt(tokens[4], 10) < 0)) {
        return false;
    }

    // En-passant token must be a valid square or "-" if no en-passant
    // capture is avaliable.
    if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
        return false;
    }

    // Castle permissions must be a valid combination of KQkq.
    if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
        return false;
    }

    // 2nd field (side to move) must be either "w" or "b".
    if (!/^(w|b)$/.test(tokens[1])) {
        return false;
    }

    // Board  validation.
    const ranks = tokens[0].split("/");

    // There must be exactly 8 ranks.
    if (ranks.length !== 8) {
        return false;
    }

    // Cells found must be exactly 64 after the two dimensional for loop.
    let cells_found = 0;
    // We also validate the rank itself; it must have exactly 8 cells.
    let rank_cells_found;
    // A number is not allowed to appear next to another number, so the last
    // cell type is being kept track of.
    let last_cell_type;

    for (const rank of ranks) {
        // Reset variables from last iteration.
        rank_cells_found = 0;
        last_cell_type = "piece";

        // Iterate over every character in the rank.
        for (const char of rank) {
            if (isNaN(char)) {
                // Runs if the selected char is a piece. Pieces add one to the
                // cells count.

                // Validate the piece character.
                if (!valid_piece_rgx.test(char)) {
                    return false;
                }

                rank_cells_found ++;
                last_cell_type = "piece";
            } else {
                // Runs if the selected char is an empty space indicator.

                // Number cells cannot appear next to one another.
                if (last_cell_type === "number") {
                    return false;
                }

                // A number represents empty spacec according to it's value, so
                // it is parsed as an integer and added to the cells found.
                rank_cells_found += parseInt(char, 10);
                last_cell_type = "empty";
            }
        }

        // A rank must have exactly 8 cells.
        if (rank_cells_found !== 8) {
            return false;
        }

        // Add the cell count of this rank to the total cell count.
        cells_found += rank_cells_found;
    }

    // A board must have exactly 64 cells.
    if (cells_found !== 64) {
        return false;
    }

    // All tests passed.
    return true;
}

export const fen = {
    parse: parse_fen,
    validate: validate_fen,
}