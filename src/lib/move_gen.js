/**
 * @fileoverview Function for generating moves for a given board state.
 * @author Nik Radi
 * @since 1.0.0
 */

import { fen } from "lib/chess";

const sides = {
    white: 0,
    black: 1,
};

const direction = {
             NNW: +19,		   NNE: +21,
    NWW: + 8, NW: + 9, N: +10,  NE: +11, NEE: +12,
               W: - 1,		     E: + 1,
    SWW: -12, SW: -11, S: -10,  SE: - 9, SEE: -8,
             SSW: -21,		   SSE: -19,
}

const rook_dir = [
    direction.N, direction.E,
    direction.S, direction.W,
];

const knight_dir = [
    direction.NNW, direction.NNE,
    direction.NEE, direction.SEE,
    direction.SSE, direction.SSW,
    direction.SWW, direction.NWW,
 ];

 const bishop_dir = [
     direction.NW, direction.NE,
     direction.SE, direction.SW,
 ];

 const king_dir = [
     direction.N, direction.NE,
     direction.E, direction.SE,
     direction.S, direction.SW,
     direction.W, direction.NW,
 ];

/**
 * Parses a FEN string and returns an object where each key
 * is a square that the current player has a piece on, and
 * each value is an array of valid squares that particular
 * pieces can move to.
 *
 * @example
 *     gen_legal_moves("8/8/8/8/8/8/8/1N4N1 w - -");
 * @see {@link https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation | FEN notation specifications}
 * @param {string} fen_str - FEN string representing the board state.
 * @returns {object} - An object containing the valid moves each pieces can play.
 */
export function gen_legal_moves(fen_str) {
    const pieces = fen.parse(fen_str).reverse();
    const pieces_with_padding = add_padding(pieces);
    const turn = get_turn(fen_str)
    const pseudo_legal_moves = gen_pseudo_legal_moves(pieces_with_padding, turn);
    console.log(pseudo_legal_moves);
    return remove_illegal_moves(pseudo_legal_moves);
}

function add_padding(pieces) {
    let pieces_with_padding = [];
    for (let i = 0; i < 2 * 10; i++) {
        pieces_with_padding.push('invalid');
    }
    
    for (let rank = 0; rank < 8; rank++) {
        pieces_with_padding.push('invalid');
        for (let file = 0; file < 8; file++) {
            const piece = pieces[rank * 8 + file];
            pieces_with_padding.push(piece);
        }

        pieces_with_padding.push('invalid');
    }

    for (let i = 0; i < 2 * 10; i++) {
        pieces_with_padding.push('invalid');
    }

    return pieces_with_padding;
}

// TODO: Add documentation
function gen_pseudo_legal_moves(pieces, turn) {
    let pseudo_legal_moves = { };
    for (let i = 0; i < pieces.length; i++) {
        if (!is_piece_color(pieces[i], turn)) {
            continue;
        }

        let new_moves = { };
        switch (pieces[i]) {
            case 'R':
                new_moves = gen_slider_moves(pieces, turn, i, rook_dir);
                break;
            case 'N':
                new_moves = gen_non_slider_moves(pieces, turn, i, knight_dir);
                break;
            case 'B':
                new_moves = gen_slider_moves(pieces, turn, i, bishop_dir);
                break;
            case 'Q':
                new_moves = gen_slider_moves(pieces, turn, i, king_dir);
                break;
            case 'K':
                new_moves = gen_non_slider_moves(pieces, turn, i, king_dir);
                break;
                
            case 'r':
                new_moves = gen_slider_moves(pieces, turn, i, rook_dir);
                break;
            case 'n':
                new_moves = gen_non_slider_moves(pieces, turn, i, knight_dir);
                break;
            case 'b':
                new_moves = gen_slider_moves(pieces, turn, i, bishop_dir);
                break;
            case 'q':
                new_moves = gen_slider_moves(pieces, turn, i, king_dir);
                break;
            case 'k':
                new_moves = gen_non_slider_moves(pieces, turn, i, king_dir);
                break;
        }

        if (Object.keys(new_moves).length === 0) {
            continue;
        }

        pseudo_legal_moves = extend_object(pseudo_legal_moves, new_moves);
    }

    return pseudo_legal_moves;
}

// TODO: Add documentation
function remove_illegal_moves(moves) {
    return moves;
}

// TODO: Add documentation
function gen_non_slider_moves(pieces, turn, square, directions) {
    // TODO: "square" but either "0" or "a1"
    let moves = { [square]: [] };
    for (let i = 0; i < directions.length; i++) {
        const new_square = square + directions[i];
        if (!is_valid_square(new_square)) {
            continue;
        }

        if (is_piece_color(pieces[new_square], turn)) {
            continue;
        }

        if (pieces[new_square] === 'invalid')  {
            continue;
        }
        
        moves[square].push(new_square);
    }
    
    return moves;
}

// TODO: Add documentation
function gen_slider_moves(pieces, turn, square, directions) {
    // TODO: "square" but either "0" or "a1"
    let moves = { [square]: [] };
    const opponent_color = get_opponent_color(turn);
    for (let i = 0; i < directions.length; i++) {
        let new_square = square;

        while (true) {
            new_square += directions[i];
            if (!is_valid_square(new_square)) {
                break;
            }

            if (is_piece_color(pieces[new_square], turn)) {
                break;
            }

            if (pieces[new_square] === 'invalid')  {
                break;
            }
            
            moves[square].push(new_square);
            if (is_piece_color(pieces[new_square], opponent_color)) {
                break;
            }
        }
    }
    
    return moves;
}

// TODO: Add documentation
function is_valid_square(square) {
    return true;
}

/**
 * Given a FEN string, this function will return a Color
 * that represents whose turn it is to move.
 *
 * @param {string} fen_str - Fen string representing the board state.
 * @returns {Color} - A Color representing whose turn it is to move.
 */
function get_turn(fen_str) {
    const fen_by_space = fen_str.split(" ");
    // The string representing turn is always at index 1
    const turn_str = fen_by_space[1];

    if (turn_str === "w") {
        return sides.white;
    }

    if (turn_str === "b") {
        return sides.black;
    }

    throw new Error(`The string representing the turn must be either \"w\" or \"b\" but was ${turn_str}`);
}

function is_piece_color(piece, color) {
    if (color === sides.white) {
        return ['P', 'R', 'N', 'B', 'Q', 'K'].includes(piece);
    }
    
    if (color === sides.black) {
        return ['p', 'r', 'n', 'b', 'q', 'k'].includes(piece);
    }

    // TODO: Maybe throw error
    return false;
}

function get_opponent_color(color) {
    if (color === sides.white) {
        return sides.black;
    }

    if (color === sides.black) {
        return sides.white;
    }

    // TODO: Throw error
    return null;
}

function extend_object(obj1, obj2) {
    for (var key in obj2) {
        if (key in obj1) {
            continue;
        }

        obj1[key] = obj2[key];
    }

    return obj1;
}
