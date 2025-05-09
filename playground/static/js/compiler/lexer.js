import { Character } from './util/character.js'
import { Token } from './util/tokens.js'

function equalsCanGoNext(c) {
    if (!c) {
        return false;
    }

    return "*&/|+-<>~=".indexOf(c) >= 0;
}

export function qrtTokenize(stream) {
    const tokens = [];
    let token = "";

    console.log("Compiling...")

    while (!stream.isEOF())
    {
        const c = stream.peek();

        if (Character.isDoubleQuotes(c)) {
            token += `"${stream.unwrap('"')}"`; // Surrond by quotation marks
        } else if (Character.isLetter(c)) {
            token += stream.readWhile(Character.isLetter);
        } else if (Character.isDigit(c)) {
            token += stream.readWhile(Character.isDigit);
        } else {
            stream.skip();
            if (Character.isWhitespace(c)) { continue; }

            token += c;
            if (stream.peek() == '=' && equalsCanGoNext(c)) {
                token += '=';
                stream.skip();
            }
        }

        tokens.push(Token(token));
        token = "";
    }

    return tokens;
}

window.qrtTokenize = qrtTokenize;
