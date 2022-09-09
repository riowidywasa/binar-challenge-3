function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);
  console.log("Sebelum diurutkan dari yang tahun yang terkecil")
  console.table(cars)
  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
    for (let i = 0; i < result.length - 1; i++) {
        for (let ii = 0; ii < result.length - 1; ii++) {
            now = result[ii].year;
            next = result[ii+1].year;
            if(now > next){
                temp = result[ii];
                result[ii] = result[ii+1];
                result[ii+1]= temp;                    
            }
        }
    }

  // Rubah code ini dengan array hasil sorting secara ascending
    console.log("Sesudah diurutkan");
    console.table(result);
    return result;
}
