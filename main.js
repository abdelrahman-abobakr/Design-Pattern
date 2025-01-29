class Chair{
    constructor(price, modelNO){
        this.price = price;
        this.modelNO = modelNO;
    }
}

class ChairFactory{
    createChair(type){
        switch(type){
            case 'artDeco':
                return new Chair(3000, 1);
            case 'victorian':
                return new Chair(2000, 2);
            case 'modern':
                return new Chair(1000, 3);
        }
    }
}

class Sofa{
    constructor(price, width, height, length){
        this.price = price;
        this.modelNO = modelNO;
    }
}

class SofaFactory{
    createSofa(type){
        switch(type){
            case 'artDeco':
                return new Sofa(5000, 1);
            case 'victorian':
                return new Sofa(4000, 2);
            case 'modern':
                return new Sofa(3000, 3);
        }
    }
}

class CoffeeTable{
    constructor(price, width, height, length){
        this.price = price;
        this.modelNO = modelNO;
    }
}

class CoffeeTableFactory{
    createTable(type){
        switch (type){
            case 'artDeco':
                return new CoffeeTable(500, 1);
            case 'victorian':
                return new CoffeeTable(400, 2);
            case 'modern':
                return new CoffeeTable(600, 3);
        }
    }
}

const chairFactory = new ChairFactory();
const sofaFactory  = new SofaFactory();
const tableFactory = new CoffeeTableFactory();

function makeProducts(type, category){
    switch(type){
        case 'chair':
            return chairFactory.createChair(category);
        case 'sofa':
            return sofaFactory.createSofa(category);
        case 'coffeeTable':
            return tableFactory.createTable(category);
    }
}

const product = makeProducts('chair','modern');
console.log(product);
