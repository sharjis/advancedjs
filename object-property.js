const students=[
    {id:21,name:'Sabbir Khan'},
    {id:23,name:'Sabbir ban'},
    {id:41,name:'Sabbir han'}

];

    const  names =students.map(z=>z.name);
    console.log(names);
    const bigger=students.filter(x=> x.id>21);
    console.log(bigger);
    const biggerO=students.find(x=> x.id>21);
    console.log(biggerO);
    //find mane prothom element ta
