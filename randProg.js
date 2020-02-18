const prog = [["int main() { <stat_list> return 0; }", 1.0]];

const stat_list = [ ["<stat>",              0.4],
                    ["<stat_list> <stat>",  1.0]
];

const stat = [  
    ["<cmpd_stat>",             0.2],
    ["<if_stat><iter_stat>",    0.4],
    ["<assgn_stat>",            0.7],
    ["<decl_stat>",             1.0]
];


const cmpd_stat = [ ["<stat_list>", 1]];

const if_stmt = [   
    ["if ( <exp> ) <cmpd_stat> else <cmpd_stat>",   0.05],
    ["if ( <exp> ) <cmpd_stat>",                    0.10],
    ["if ( <exp> ) <cmpd_stat> else <stat>",        0.25],
    ["if ( <exp> ) <stat> else <cmpd_stat>",        0.40],
    ["if ( <exp> ) <stat> else <stat>",             0.65],
    ["if ( <exp> ) <stat>",                         1.00]
/*  ["if ( <exp> ) <cmpd_stat> else <cmpd_stat>",   0.05],
    ["if ( <exp> ) <cmpd_stat>",                    0.05],
    ["if ( <exp> ) <cmpd_stat> else <stat>",        0.15],
    ["if ( <exp> ) <stat> else <cmpd_stat>",        0.15],
    ["if ( <exp> ) <stat> else <stat>",             0.25],
    ["if ( <exp> ) <stat>",                         0.35] */
];

const iter_stat = [ 
    ["while ( <exp> ) <cmpd_stat>" , 0.25],
    ["while ( <exp> ) <stat>"      , 1.00]
];

const assgn_stat = [["<id> = <exp>;"]];

const decl_stat = [ 
    ["<type> <id>"], 
    ["<type> <assgn_stat>"]
];

const exp =[
    ["<exp> <op> <exp>"], 
    ["<id>"], 
    ["<const>"]
];

const op = [
    ["+",0.25],
    ["-",0.25],
    ["*",0.25],
    ["/",0.25]
]

const type = [  
    ["<int>"], 
    ["<double>"]
];

const id = ["<char><chardigit_seq>"]

const const_ = ["<digit><digit_seq>"]

const char_digit_seq = [
    "", 
    "<char><char_digit_seq>", 
    "<digit><char_digit_seq>"
];
            
const digit_seq = [ 
    "", 
    "<digit><digit_seq>"
]

var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_".split('');

var digit = "0123456789".split('');

console.log(char);
console.log(digit);

function getFirstProd(){
    var a = "testavs <prog>- test";

    let start = -1;
    let end = -1;
    let i = 0;
    while(i < a.length){
        if(a[i]=="<"){
            start = i;
        }else if(a[i]==">"){
            end = i;
            break;
        };
        i++;
    }

    var prod_stmt = a.slice(start, (end+1));
    var pre = a.slice(0, start);
    var post = a.slice((end+1), (a.length));

    console.log(pre + "\t pre");
    console.log(post + "\t post");
    console.log(a + "\t prod_stmt");

    console.log(stat_list);
}

getFirstProd();