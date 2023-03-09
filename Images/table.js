angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
    $scope.date = ['2024-03-15', '2023-03-15', '2028-08-15', '2025-08-15'];
    
    // ordenar date
    $scope.date.sort()

    
    // console.log($scope.date)
    // console.log(maior(2,3))


    // function maior(a, b) {
    //     if($scope.date[a] > $scope.date[b]) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // remove elementos duplicados 
    // $scope.date = $scope.date.filter((este, i) => $scope.date.indexOf(este) === i);

    n = 4;
    $scope.obj1 = [];
    $scope.obj2 = [];
    $scope.obj3 = [];
    $scope.obj4 = [];

    retornarVetorObj($scope.obj1)
    retornarVetorObj($scope.obj2)
    retornarVetorObj($scope.obj3)
    // retornarVetorObj($scope.obj4)

    function retornarVetorObj(vet) {
        for (var i = 0; i < n; i++) {
            vet.push(
                {
                    rate: getRandomArbitrary(4, 7).toFixed(2),
                    date: $scope.date[i]
                }
            )
        }
    }

    var auxDate = ['2022-03-15', '2024-03-15', '2028-08-15'];
    auxDate.sort();
    for (var i = 0; i < 3; i++) {
        $scope.obj4.push(
            {
                rate: getRandomArbitrary(4, 7).toFixed(2),
                date: auxDate[i]
            }
        )
    }

    var vet = new Array(n + 1);
    for (var i = 0; i < n + 1; i++) {
        vet[i] = new Array($scope.date.length + 1);
    }

    vet[0][0] = '2022-03-15'
    var cont = 0;
    for (var i = 1; i < n; i++) {
        vet[0][i] = $scope.date[cont];
        cont++;
    }
    $scope.date = vet[0];

    popularTabela(vet, $scope.obj1, 1)
    popularTabela(vet, $scope.obj2, 2)
    popularTabela(vet, $scope.obj3, 3)
    popularTabela(vet, $scope.obj4, 4)
    
    function popularTabela(v, d, l) {
        for (var i = 0; i < n; i++) {
            v[l][i] = angular.copy(d[i]);
        }
    }

    console.log(vet);

    // $scope.obj4.splice(1, 1)
    console.log($scope.obj4);

    var cont = 0;
    for (let i = 1; i < n+1; i++) {
        for (let j = 0; j < n; j++) {
            // console.log(i +'-'+ j + ': ' + vet[i][j].date + ' != ' + $scope.date[i])
            console.log(`[${i}][${j}] ` + vet[i][j].date + ' != ' + $scope.date[cont])
            if(vet[i][j].date != $scope.date[cont]){
                vet[i].splice(j, 0, null);
            }
            cont++;              
        }
        cont = 0;
    }

    console.log(vet);

    copiar($scope.obj1, 1);
    copiar($scope.obj2, 2);
    copiar($scope.obj3, 3);
    copiar($scope.obj4, 4);

    function copiar(array, l) {
        for (let i = 0; i < n; i++) {
            array[i] = vet[l][i]; 
        }
    }


    function retornaVetor(j) {
        var m = new Array(j);
        for (var k = 0; k < j; k++) {
            m[k] = getRandomArbitrary(4, 7).toFixed(2);
        }
        return m;
    }

    function retornarMatriz(i, j) {
        var m = new Array(i);

        for (var k = 0; k < i; k++) {
            m[k] = new Array(j);
        }

        for (var k = 0; k < i; k++) {
            for (var l = 0; l < j; l++) {
                m[k][l] = getRandomArbitrary(4, 7).toFixed(2);
            }
        }
        return m;
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
});