/**
 * @fileoverview Utility functions for making an interactive chess board.
 * @author Andreas Kruhlmann
 * @since 1.0.0
 */

// Chess unicode characters.
// White.
export const WHITE_KING_UNICODE_HTML = "&#x2654;";
export const WHITE_QUEEN_UNICODE_HTML = "&#x2655;";
export const WHITE_ROOK_UNICODE_HTML = "&#x2656;";
export const WHITE_BISHOP_UNICODE_HTML = "&#x2657;";
export const WHITE_KNIGHT_UNICODE_HTML = "&#x2658;";
export const WHITE_PAWN_UNICODE_HTML = "&#x2659;";
// Black.
export const BLACK_KING_UNICODE_HTML = "&#x265A;";
export const BLACK_QUEEN_UNICODE_HTML = "&#x265B;";
export const BLACK_ROOK_UNICODE_HTML = "&#x265C;";
export const BLACK_BISHOP_UNICODE_HTML = "&#x265D;";
export const BLACK_KNIGHT_UNICODE_HTML = "&#x265E;";
export const BLACK_PAWN_UNICODE_HTML = "&#x265F;";


/**
 * Parses a FEN string and returns an array of pieces as represented by chars.
 * Function does not validate impossible piece positions such as pawns before
 * the starting line. The returned array uses the standard FEN notation for
 * representing pieces as chars.
 *
 * @throws {ReferenceError} - FEN string not provided.
 * @throws {TypeError} - FEN string argument was not a string.
 * @throws {Error} - FEN string was invalid.
 * @example
 *     parse_fen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
 * @see {@link https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation | FEN notation specifications}
 * @param {string} fen - FEN string to validate.
 * @returns {string[]} - 64 length array of piece char representations.
 */
function parse_fen(fen) {
    if (!fen) {
        throw new ReferenceError("FEN string not provided");
    }

    if (typeof fen !== "string") {
        throw new TypeError("Argument was not a string");
    }

    // Regular expression for validating a piece char of a FEN string.
    const fen_valid_piece_rgx = /^[prnbqkPRNBQK]$/;
    // Regular expression for validating the castle permissions of a FEN string.
    const fen_castle_perm_rxp = /^(KQ?k?q?|Qk?q?|kq?|q|-)$/;
    // Regular expression for validating the side to move of a FEN string.
    const fen_side_rxp = /^(w|b)$/;
    // Regular expression for validating the en-passant square of a FEN string.
    const en_passant_square_rxp = /^(-|[abcdefgh][36])$/;

    // Tokens are wrapped in white space (single space).
    const tokens = fen.split(/\s+/);

    // FEN string must contain six space-delimited fields.
    if (tokens.length !== 6) {
        throw new Error("Invalid FEN; not enough fields");
    }
    // 6th field (50 move counter) must be a positive integer.
    if (isNaN(tokens[5]) || parseInt(tokens[5], 10) <= 0) {
        throw new Error("Invalid FEN; invalid move counter (not a positive integer)");
    }

    // 5th field (ply count) must be a positive integer.
    if (isNaN(tokens[4]) || (parseInt(tokens[4], 10) < 0)) {
        throw new Error("Invalid FEN; invalid ply count (not a positive integer");
    }

    // En-passant token must be a valid square or "-" if no en-passant
    // capture is avaliable.
    if (!en_passant_square_rxp.test(tokens[3])) {
        throw new Error("Invalid FEN; invalid en-passant setting");
    }

    // Castle permissions must be a valid combination of KQkq.
    if (!fen_castle_perm_rxp.test(tokens[2])) {
        throw new Error("Invalid FEN; invalid castling permissions");
    }

    // 2nd field (side to move) must be either "w" or "b".
    if (!fen_side_rxp.test(tokens[1])) {
        throw new Error("Invalid FEN; invalid side to move (must be \"w\" or \"b\"");
    }

    // Board validation.
    const ranks = tokens[0].split("/");

    // There must be exactly 8 ranks.
    if (ranks.length !== 8) {
        throw new Error("Invalid FEN; invalid number of ranks (must be exactly 8)");
    }

    // Cells found must be exactly 64 after the two dimensional for loop.
    let board_pieces = [];
    // We also validate the rank itself; it must have exactly 8 cells.
    let rank_pieces;
    // A number is not allowed to appear next to another number, so the last
    // cell type is being kept track of.
    let last_cell_type;

    for (const rank of ranks) {
        // Reset variables from last iteration.
        rank_pieces = [];
        last_cell_type = "piece";

        // Iterate over every character in the rank.
        for (const char of rank) {
            if (isNaN(char)) {
                // Runs if the selected char is a piece. Pieces add one to the
                // cells count.

                // Validate the piece character.
                if (!fen_valid_piece_rgx.test(char)) {
                    throw new Error(`Invalid FEN; piece char was not recognized (found "${char}")`);
                }

                rank_pieces.push(char);
                last_cell_type = "piece";
            } else {
                // Runs if the selected char is an empty space indicator.

                // Number cells cannot appear next to one another.
                if (last_cell_type === "number") {
                    throw new Error("Invalid FEN; cannot contain two whitespace indicators in sequence");
                }

                // A number represents empty spacec according to it's value, so
                // it is parsed as an integer and the amount is added as empty
                // pieces to the pieces list.
                const empty_cells = parseInt(char, 10);
                for (let i = 0; i < empty_cells; i++) {
                    rank_pieces.push("");
                }
                last_cell_type = "empty";
            }
        }

        // A rank must have exactly 8 cells.
        if (rank_pieces.length !== 8) {
            throw new Error(`Invalid FEN; rank did not have exactly 8 cells (was ${rank_cells_found} on rank ${rank + 1})`);
        }

        // Add the cell count of this rank to the total cell count.
        board_pieces = [...board_pieces, ...rank_pieces];
    }

    // A board must have exactly 64 cells.
    if (board_pieces.length !== 64) {
        throw new Error(`Invalid FEN; amount of cells was not 64 (was ${cells_found})`);
    }

    // All tests passed.
    return board_pieces;
}

export const fen = {
    parse: parse_fen,
}