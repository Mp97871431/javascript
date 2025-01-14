let valores = [8,5,3,2,1]

for(let pos = 0 ; pos < valores.length ; pos ++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}


/*ou pedemos escrever assim */


for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
