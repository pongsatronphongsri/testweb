const name = ['justin', 'sarah','christopher'];

console.log('--while--');
let index =0;
while (index < name.length){
    const name = names[index];
    console.log(name);
    index++;
}

console.log('--for --');
for(let index = 0; index< name.length;index++){
    const name = name[index];
    console.log(name);
}

console.log('-- for of -- ')
for(let name of name){
    console.log(name);
}