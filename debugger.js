const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger;//переменная bonus не определена; константе sum присвоено значение суммы переменных а и b
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger;//переменной bonus присваивается значение
    return bonus;
    };
