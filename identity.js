[null, 1, 2, null, undefined, true, {}, () => {}, 3].filter(_.identity);
// => [1, 2, true, Object {}, function(), 3]

////////////////////////

const selector = makeSelector(
    () => 42, // Здесь мы передаём значение 42 в следующий аргумент
    identity, 
// Здесь makeSelector обязательно ждёт что-то, что обработает эту 42 и вернёт значение
// Но так как нам достаточно получить 42, а убрать последний аргумент нельзя, identity подойдёт здесь идеально
);
selector(); // 42 