const fs = require('fs') 

var prog = [["int main() { <stat_list> return 0; }", 1.0]];

var stat_list =[
    ["<stat>",              0.4],
    ["<stat_list><stat>",  1.0]
];

var stat = [  
    ["<cmpd_stat>",             0.1],
    ["<if_stmt><iter_stat>",    0.3],
    ["<assgn_stat>",            0.7],
    ["<decl_stat>",             1.0]
];

var if_stmt = [   
    ["if (<exp>){ <cmpd_stat> }else { <cmpd_stat> }",   0.05],
    ["if (<exp>){<cmpd_stat>}",                    0.10],
    ["if (<exp>){<cmpd_stat> }else { <stat> }",        0.25],
    ["if (<exp>){<stat>} else {<cmpd_stat>}",        0.40],
    ["if (<exp>){<stat>} else {<stat>}",             0.75],
    ["if (<exp>){<stat>}",                         1.00]
];

var iter_stat = [ 
    ["while (<exp>){ <cmpd_stat> }" , 0.25],
    ["while (<exp>){ <stat> }"      , 1.00]
];

var decl_stat = [ 
    ["<type> <assgn_stat>", 0.3], 
    ["<type> <id>", 1]
];

var exp =[
    ["<exp> <op> <exp>" , 0.25], 
    ["<id>"             , 0.60], 
    ["<const>"          , 1.00]
];

var op = [
    ["+",   0.25],
    ["-",   0.50],
    ["*",   0.75],
    ["/",   1.00]
]

var type = [  
    ["int"    ,   0.5], 
    ["double" ,   1]
];

var char_digit_seq = [
    ["<char><char_digit_seq>"   ,0.20], 
    ["<digit><char_digit_seq>"  ,0.40],
    [""                         ,1,00]
];
            
var digit_seq = [ 
    ["<digit><digit_seq>"   ,0.40],
    [""                     ,1.00]
]

var cmpd_stat = [ ["<stat_list> ", 1]];
var assgn_stat = [["<id> = <exp> ", 1]];
var id = [["<char><char_digit_seq> ", 1]]
var const_ = [["<digit><digit_seq> ", 1]]
var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_".split('');
var digit = "0123456789".split('');

function getReplacement(array, randNum){
    for (let index = 0; index < array.length; index++) {
        if(array[index][1]>= randNum){
            return array[index][0];
        }
    }
}

function getFirstSymbol(str){
    return str.indexOf("<");
}
function getLastSymbol(str){
    return str.indexOf(">");
}

function getFirstProd(){
    var a = "<prog>";

    let start = getFirstSymbol(a);
    let end = getLastSymbol(a);

    while (start != -1) {
        start = getFirstSymbol(a);
        end = getLastSymbol(a);

        var prod_stmt = a.slice(start, (end+1));
        var pre = a.slice(0, start);
        var post = a.slice((end+1), (a.length));

        switch (prod_stmt) {
            case "<prog>":
                prod_stmt = getReplacement(prog, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<stat_list>":
                prod_stmt = getReplacement( stat_list, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<stat>":
                prod_stmt = getReplacement( stat, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<cmpd_stat>":
                prod_stmt = getReplacement( cmpd_stat, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<if_stmt>":
                prod_stmt = getReplacement( if_stmt, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<iter_stat>":
                prod_stmt = getReplacement( iter_stat, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<assgn_stat>":
                prod_stmt = getReplacement( assgn_stat, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<decl_stat>":
                prod_stmt = getReplacement( decl_stat, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<exp>":
                prod_stmt = getReplacement( exp, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<op>":
                prod_stmt = getReplacement( op, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<type>":
                prod_stmt = getReplacement( type, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<id>":
                prod_stmt = getReplacement( id, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<const>":
                prod_stmt = getReplacement( const_, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<char_digit_seq>":
                prod_stmt = getReplacement( char_digit_seq, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<digit_seq>":
                prod_stmt = getReplacement( digit_seq, Math.random());
                a = (pre + prod_stmt + post);
                break;
            case "<char>":
                prod_stmt = char[Math.floor(Math.random() * char.length)];
                a = (pre + prod_stmt + post);
                break;
            case "<digit>":
                prod_stmt = digit[Math.floor(Math.random() * digit.length)];
                a = (pre + prod_stmt + post);
                break;
            default:
                break;
        }
    }
    return a;
}

fs.writeFile('Output.cpp', getFirstProd(), (err) => {       
    console.log("An error occured. Go fix it.")
    if (err) throw err; 
}) 
