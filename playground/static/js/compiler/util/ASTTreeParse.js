/*
Example of parsed -> AST Tree
parsed:
[
    {"symbol": "fn","type":"kw_FN"},
    {"symbol": "main","type":"ID"},
    {"symbol": "(","type":"O_PAREN"},
    {"symbol": ")","type":"C_PAREN"},
    {"symbol": "{","type":"O_BRACE"},
    {"symbol": "println","type":"ID"},
    {"symbol": "(","type":"O_PAREN"},
    {"symbol": "\"Hello world!\"","type":"STR_LITERAL"},
    {"symbol": ")","type":"C_PAREN"},
    {"symbol": ";","type":"SEMICOLON"},
    {"symbol": "}","type":"C_BRACE"}
]

AST Tree:
functionDeclaration:
    name: "main"
    args: []
    body:
        functionCall:
            target: "println"
            args: ["Hello, world"]

 - or -
[
    {"functionDeclaration":
        {"name": "main",
        "args": [],
        "body":
            {"functionCall":
                {"target": "println",
                "args": ["Hello, world"]}
            }
        }
    }
]
*/

// Method:
// 1. Detect keywords
// 2. ????