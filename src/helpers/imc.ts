// Por ser typescript estou exportando um type que fornece o tipo de cada objeto dentro de levels.
export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    // Este ? abaixo, significa que é opcional.
    yourImc?: number;
}

// Criando array para armazenar cada tipo de resultado e exibir para o usuário
export const levels: Level[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.5, 24.9]},
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30]},
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99]}
];

export const calculateImc = (height:number, weight:number) => {
    const imc = weight / (height * height);

    // Percorrendo o vetor levels.
    for(let i in levels){
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
            let levelCopy = {...levels[i]}
            levelCopy.yourImc = imc;
            return levelCopy;
        }
    }

    return null;
}