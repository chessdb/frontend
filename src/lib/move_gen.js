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
    const turn = get_turn(fen_str);

    const legal_knight_moves = gen_legal_knight_moves(pieces, turn);

    let legal_moves = { };
    return legal_moves;
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
    // The string representing turn is always at index 2
    const turn_str = fen_by_space[2];

    if (turn_str === "w") {
        return sides.white;
    }

    if (turn_str === "b") {
        return sides.black;
    }

    throw new Error(`The string representing the turn must be either \"w\" or \"b\" but was ${turn_str}`);
}

/**
 * @param {string[]} pieces - 64 length array of piece char representations.
 * @param {Color} turn - Represents whose turn it is to make a move.
 * @returns {object} - An object containing the valid moves each pieces can play.
 */
function gen_legal_knight_moves(pieces, turn) {
    let legal_knight_moves = { };
    return legal_knight_moves;
}