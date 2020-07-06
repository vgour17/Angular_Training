function GetStatementCase(input : string) : string{
  let statements =  input.split('.');
  let finalStatement = new Array<string>();
  statements.forEach((stmt: String, index:Number) => {
      if(stmt.length>0)
      {
        stmt = stmt.trim();
        stmt = stmt.replace(stmt.charAt(0), stmt.charAt(0).toUpperCase());
        finalStatement.push(stmt.toString());   
      }
  })
   return finalStatement.join('.');
}


function GetCountofWords(input : string) : Number{
    let statements =  input.split(' ');
    return statements.length;
}

function GetOccuranceList(input : string, letter : string ) : Array<string>{
    let statements = input.split(' ');
    let occuranceList = new Array<string>();
    statements.forEach((stmt : string, index, Number) => {
        stmt = stmt.replace('.','').trim();
        if(stmt.length> 0 && stmt.indexOf(letter) != -1){
            occuranceList.push(stmt.toString());
        }
    })
    return occuranceList;
}

function GetCountOfMatchingWord(input : string, word:string): Number{
    let regex = new RegExp(word, "g");
    return input.match(regex).length;
}

let mutltiStatement = "typeScript is a strongly typed, object oriented, compiled language. it was designed by Anders Hejlsberg (designer of C#) at Microsoft. typeScript is both a language and a set of tools. typeScript is a typed superset of JavaScript compiled to JavaScript"

console.log("\n1. Convert a string in Statement Case (First character after . must be in upper case) \n")
console.log(GetStatementCase(mutltiStatement));

console.log("\n2. Print number of words in the string (string in between two blank spaces) \n")
console.log(GetCountofWords(mutltiStatement));

console.log("\n3. List all strings having character 'a' in it \n")
let list = GetOccuranceList(mutltiStatement, "a");
list.forEach((value : string, index:number) => {
    console.log(value);
})

console.log("\n4. Print number of matching Words in string \n")
let letter = "a";
console.log(` '${letter}' letter occurs ${GetCountOfMatchingWord(mutltiStatement, letter)} times\n`);