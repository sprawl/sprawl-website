
function startFlow01(){
    animAction03();
}

function animAction03(){
    animAction('#_03_nodo-20', 1, function(){
        animAction('#_03_nodo-12',1);
        animAction('#_03_nodo-8', 1, function(){
            animAction('#_03_nodo-2',2,function(){
                animAction('#_03_nodo-22',2, function(){
                    animAction('#_03_nodo-24',2);
                    animAction('#_03_nodo-26',1, function(){
                        animAction('#_03_nodo-28',1, function(){
                            animAction('#_03_nodo-14', 1, function(){
                                animAction('#_03_nodo-16',1);
                                animAction('#_03_nodo-18',1);
                                //01
                                animAction01();
                            });
                        });
                    });
                });
            });
            animAction('#_03_nodo-4', 2, function(){
                animAction('#_03_nodo-10', 1, function(){
                    animAction('#_03_nodo-48', 1, function(){
                        animAction('#Elipse_209', 4);
                        animAction('#_03_nodo-46', 3, function(){
                            animAction('#_03_nodo-42', 1);
                            animAction('#_03_nodo-40', 1);
                            animAction('#_03_nodo-38', 1, function(){
                                animAction('#_03_nodo-6', 1);
                                animAction('#_03_nodo-36', 1);
                                animAction('#_03_nodo-44', 1);
                            });
                            animAction('#_03_nodo-30', 1, function(){
                                animAction('#_03_nodo-34', 1);
                            });
                        });
                    });
                });
            });
        });
    });
}

function animAction01(){
    animAction('#_01_net-6', 1, function(){
        animAction('#_01_net-18',1);
        animAction('#_01_net-20', 1, function(){
            animAction('#_01_net-19',1);
            animAction('#_01_net-16',2,function(){
                animAction('#_01_net-14',3,function(){
                    animAction('#Elipse_209-12',2);
                    animAction('#_01_net-12',3,function(){
                        animAction('#_01_net-10',1,function(){
                            animAction('#_01_net-9',1);
                        });
                        animAction('#_01_net-8',1,function(){
                            animAction('#_01_net-7',1,function(){
                                animAction('#_01_net-11',1);
                                animAction('#_01_net-5',1);
                            });
                        });
                        animAction('#_01_net-2',1,function(){
                            //02
                            animAction02();
                        });
                        animAction('#_01_net-3',1);
                    });
                });
            });
            animAction('#_01_net-17',2,function(){
                animAction('#_01_net-15',3,function(){
                    animAction('#_01_net-13',3);
                    animAction('#Elipse_209-13',2);
                });
            });
        });
    });
}

function animAction02(){
    animAction('#_02_nodo-32', 1, function(){
        animAction('#_02_nodo-8', 1, function(){
            animAction('#_02_nodo-30',1);
            animAction('#_02_nodo-34',1);
            animAction('#_02_nodo-36',2);
            animAction('#_02_nodo-4', 3, function(){
                animAction('#_02_nodo-38',1);
                animAction('#_02_nodo-12', 2, function(){
                    animAction('#_02_nodo-14',1);
                    animAction('#_02_nodo-40',2);
                });
                animAction('#_02_nodo-10', 2, function(){
                    animAction('#_02_nodo-6',3);
                    animAction('#_02_nodo-22',1);
                    animAction('#_02_nodo-16', 1, function(){
                        animAction('#_02_nodo-24', 1, function(){
                            animAction('#_02_nodo-20', 1, function(){
                                animAction('#_02_nodo-26',1);
                                //END
                                stopAnimAction(startFlow02);
                                //
                            });
                        });
                    });
                });
                animAction('#Elipse_310', 4);
                animAction('#_02_nodo-2', 3, function(){
                    animAction('#_02_nodo-44',1);
                    animAction('#_02_nodo-42',1);
                    animAction('#_02_nodo-28',1);
                });
            });
        });
    });
}
