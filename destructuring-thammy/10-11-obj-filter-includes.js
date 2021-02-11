data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];

  //A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter

  const filteredNames = data.filter((each)=>each.type.includes('dog'));
  const onlyNames = filteredNames.map((each)=>each.name)
  console.log(onlyNames)

  //Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​

  const filteredAges = data.filter((each)=>each.type.includes('dog'));
  const onlyAges = filteredAges.map((each)=>each.age)
  const sumAges = onlyAges.reduce((acc, act) => acc + act);
  console.log(sumAges)