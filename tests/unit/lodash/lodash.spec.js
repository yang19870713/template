const expect = chai.expect;

describe("_.range", () => {
    it('should create a array with given start, end and step', () => {
        let arry = _.range(1, 5, 1);
        expect(arry).to.deep.equal([1,2,3,4]);

        arry = _.range(5, 1, -1);
        expect(arry).to.deep.equal([5, 4, 3, 2]);

        arry = _.range(1, 1.5, 0.2);
        expect(arry).to.deep.equal([1, 1.2, 1.4]);
    })
});


describe("_.reduce", () => {
    let input = [1, 2, 3];
    let sumOfSquares = (arry, init=0) => {
        return _.reduce(arry, (prev, current, index, collection) => {
            return prev + current * current;
        }, init);
    }

    it('should reduces collection to a value which is the accumulated result of running each element through iteratee', () => {
        expect(sumOfSquares(input)).to.equal(14);
    });

    it('should set an init value by accumulator', () => {
        //4 + sumOfSquares([1,2,3]);
        expect(sumOfSquares(input, 4)).to.equal(18);
    });
});

describe("_.identity", () => {
    it('should return the first argument', () => {
        expect(_.identity(1, 2)).to.equal(1);
        expect(_.identity([1,2], 1)).to.deep.equal([1, 2]);
        expect(_.identity({a:1, b:2}), 1).to.deep.equal({a:1, b:2});
    });
});

describe("_.map", () => {
    it('should call iteratee on the value/key of each property of an object', () => {
        _.map({a:1}, (val, index) => {
            expect(val).to.equal(1);
            expect(index).to.equal('a');
        });
        expect(_.map({a:1, b:2}, _.identity)).to.deep.equal([1, 2]);
    });
});
