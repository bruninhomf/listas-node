const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a')
        const names = []

        /**
         * For
         */
        console.time('For')
        for(let i=0; i <= result.results.length -1; i++) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('For')

        /**
         * ForIn
         */
        console.time('ForIn')
        for (let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('ForIn')

        /**
         * ForOf
         */
        console.time('ForOf')
        for(pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('ForOf')

        console.log(`names`, names);
    } catch (error) {
        console.error(`error interno`, error);
    }
}

main()
