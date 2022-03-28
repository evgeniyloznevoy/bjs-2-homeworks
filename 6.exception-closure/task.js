function parseCount(a) {
    let result = Number.parseInt(a);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    } return result;
}

function validateCount(a) {
    try {
        return parseCount(a);
    }
    catch (e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        //if (a + b <= c || a + c <= b || b + c <= a) {
        //    return "Ошибка! Треугольник не существует";
        //}
        return this.a + this.b + this.c;
    }

    getArea() {
        //if (a + b <= c || a + c <= b || b + c <= a) {
        //    return "Ошибка! Треугольник не существует";
        //}
        let p = (1 / 2) * this.getPerimeter();
        return +Math.sqrt((p * (p - this.a)) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}

class wrongTriangle {
    getPerimeter() {
        return "Ошибка! Треугольник не существует";
    }
    getArea() {
        return "Ошибка! Треугольник не существует";
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return new wrongTriangle(a, b, c)
    }
}
