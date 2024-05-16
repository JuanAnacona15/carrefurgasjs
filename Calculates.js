class Calculates {
  CalcExtrDaytime(WorkDepartamet, Section, Division, HourValueue) {
    /*
        En esta funcion se calcula el valor de la hora extra diurna
        Parametros: Departamento de trabajo, Seccion, Division, Valor de la hora.
        Salida: Valor de la hora extra.
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (WorDep == 1 || WorDep == 2) {
      return HourValue * 1.25;
    } else if (WorDep == 3) {
      if (Section == 4 || Section == 5 || Section == 6) {
        return HourValue * 1.25;
      } else if (Section == 7 || Section == 8 || Section == 9) {
        return HourValue * 1.35;
      } else if (Section == 10 || Section == 11 || Section == 12) {
        return HourValue * 1.4;
      } else if (Section == 13 || Section == 14 || Section == 15) {
        return HourValue * 1.45;
      } else if (Section == 16 || Section == 17 || Section == 18) {
        return HourValue * 1.5;
      } else if (Section == 19 || Section == 20 || Section == 21) {
        return HourValue * 1.55;
      } else if (Section == 22 || Section == 23 || Section == 24) {
        return HourValue * 1.6;
      } else if (Section == 25 || Section == 26 || Section == 27) {
        return HourValue * 1.65;
      } else if (Section == 28) {
        if (Div == 1) {
          return HourValue * 1.7;
        } else if (Div == 2) {
          return HourValue * 1.715;
        } else if (Div == 3) {
          return HourValue * 1.3;
        } else if (Div == 4) {
          return HourValue * 1.45;
        } else {
          return HourValue;
        }
      } else if (Section == 29 || Section == 30) {
        return HourValue * 1.75;
      }
    } else if (WorDep == 4 || WorDep == 5) {
      return HourValue * 1.8;
    } else if (WorDep == 6 || WorDep == 7) {
      return HourValue * 1.85;
    } else if (WorDep == 8) {
      return HourValue * 1.9;
    } else {
      return HourValue;
    }
    return HourValue;
  }
  CalcExtrNight(WorDep, Section, Div, HourValue) {
    /*
        En esta funcion se calcula el valor de la hora extra nocturna
        Parametros: Departamento de trabajo, Seccion, Division, Valor de la hora.
        Salida: Valor de la hora extra.
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (WorDep == 1 || WorDep == 2) {
      return HourValue * 1.3;
    } else if (WorDep == 3) {
      if (Section == 4 || Section == 5 || Section == 6) {
        return HourValue * 1.3;
      } else if (Section == 7 || Section == 8 || Section == 9) {
        return HourValue * 1.4;
      } else if (Section == 10 || Section == 11 || Section == 12) {
        return HourValue * 1.45;
      } else if (Section == 13 || Section == 14 || Section == 15) {
        return HourValue * 1.5;
      } else if (Section == 16 || Section == 17 || Section == 18) {
        return HourValue * 1.55;
      } else if (Section == 19 || Section == 20 || Section == 21) {
        return HourValue * 1.6;
      } else if (Section == 22 || Section == 23 || Section == 24) {
        return HourValue * 1.65;
      } else if (Section == 25 || Section == 26 || Section == 27) {
        return HourValue * 1.7;
      } else if (Section == 28) {
        if (Div == 1) {
          return HourValue * 1.75;
        } else if (Div == 2) {
          return HourValue * 1.725;
        } else if (Div == 3) {
          return HourValue * 1.35;
        } else if (Div == 4) {
          return HourValue * 1.4;
        } else {
          return HourValue;
        }
      } else if (Section == 29 || Section == 30) {
        return HourValue * 1.8;
      }
    } else if (WorDep == 4 || WorDep == 5) {
      return HourValue * 1.85;
    } else if (WorDep == 6 || WorDep == 7) {
      return HourValue * 1.9;
    } else if (WorDep == 8) {
      return HourValue * 1.95;
    } else {
      return HourValue;
    }
    return HourValue;
  }
  CalcExtrSunday(WorDep, Section, Div, HourValue) {
    /*
        En esta funcion se calcula el valor de la hora extra dominical
        Parametros: Departamento de trabajo, Seccion, Division, Valor de la hora.
        Salida: Valor de la hora extra.
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (WorDep == 1 || WorDep == 2) {
      return HourValue * 1.35;
    } else if (WorDep == 3) {
      if (Section == 4 || Section == 5 || Section == 6) {
        return HourValue * 1.35;
      } else if (Section == 7 || Section == 8 || Section == 9) {
        return HourValue * 1.45;
      } else if (Section == 10 || Section == 11 || Section == 12) {
        return HourValue * 1.5;
      } else if (Section == 13 || Section == 14 || Section == 15) {
        return HourValue * 1.55;
      } else if (Section == 16 || Section == 17 || Section == 18) {
        return HourValue * 1.6;
      } else if (Section == 19 || Section == 20 || Section == 21) {
        return HourValue * 1.65;
      } else if (Section == 22 || Section == 23 || Section == 24) {
        return HourValue * 1.7;
      } else if (Section == 25 || Section == 26 || Section == 27) {
        return HourValue * 1.75;
      } else if (Section == 28) {
        if (Div == 1) {
          return HourValue * 1.8;
        } else if (Div == 2) {
          return HourValue * 1.615;
        } else if (Div == 3) {
          return HourValue * 1.3;
        } else if (Div == 4) {
          return HourValue * 1.75;
        } else {
          return HourValue;
        }
      } else if (Section == 29 || Section == 30) {
        return HourValue * 1.8;
      }
    } else if (WorDep == 4 || WorDep == 5) {
      return HourValue * 1.85;
    } else if (WorDep == 6 || WorDep == 7) {
      return HourValue * 1.9;
    } else if (WorDep == 8) {
      return HourValue * 1.95;
    } else {
      return HourValue;
    }
    return HourValue;
  }

  JacarandePremium(ExtrD, BritDep, BrithMun, SBMA) {
    /*
        En esta funcion se calcula el valor de la prima jacaranda
        Parametros: Extras diurnas, departamento de nacimiento, municipio de nacimiento, SBMA     
        Salida: Prima jacaranda
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (ExtrD % 2 != 0 && ExtrD % 7 == 0) {
      if (BritDep == 10) {
        if (BrithMun.equals("Caloto")) {
          return SBMA * 0.0002;
        } else if (BrithMun.equals("Guapi")) {
          return SBMA * 0.0025;
        } else if (BrithMun.equals("Str Quilichao")) {
          return SBMA * 0.0003;
        } else if (BrithMun.equals("Pto Tejada")) {
          return SBMA * 0.0004;
        } else {
          return SBMA * 0.000001;
        }
      } else if (BritDep == 30) {
        if (BrithMun.equals("Buga")) {
          return SBMA * 0.0005;
        } else if (BrithMun.equals("Caicedonia")) {
          return SBMA * 0.006;
        } else if (BrithMun.equals("Buenaventura")) {
          return SBMA * 0.007;
        } else if (BrithMun.equals("Palmira")) {
          return SBMA * 0.008;
        } else {
          return SBMA * 0.000001;
        }
      }
    }
    return 0;
  }

  MarcelinaPremium(HourVal, ExId, BloodTy, ZodSig, JacPrem) {
    /*
        En esta funcion se calcula el valor de la prima marcelina
        Parametros: valor de la hora, departamento de expedicion de la cedula, tipo de sangre
        signo sodiacal, prima jacaranda
        Salida: Prima marcelina
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (/*isPrime(HourVal)*/ true && HourVal % 7 == 0) {
      if (
        ExId.equals("Gachala") &&
        (BloodTy == 5 || BloodTy == 2) &&
        (ZodSig == 1 || ZodSig == 10)
      ) {
        return JacPrem * 0.5;
      } else if (
        ExId.equals("Obando") &&
        (BloodTy == 3 || BloodTy == 4 || BloodTy == 8) &&
        (ZodSig == 3 || ZodSig == 5)
      ) {
        return JacPrem * 0.6;
      } else if (
        ExId.equals("Gualmatan") &&
        (BloodTy == 1 || BloodTy == 2 || BloodTy == 3) &&
        (ZodSig == 4 || ZodSig == 8)
      ) {
        return JacPrem * 0.7;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  FiricundinaPremium(EmplTy, MarcPrem) {
    /*
        En esta funcion se calcula el valor de la prima firicundina
        Parametros: Tipo de empleado, prima marcelina.    
        Salida: Prima firicundina. 
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (EmplTy == 2) {
      return MarcPrem * 0.015;
    } else {
      return 0;
    }
  }

  PetuniaPremium(WeekVal, FiriPrem) {
    /*
        En esta funcion se calcula el valor de la prima petunia
        Parametros: Valor de la semana, prima firicundina.    
        Salida: Prima petunia. 
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (WeekVal <= 3628800) {
      return FiriPrem * 0.2;
    } else {
      return 0;
    }
  }

  HermenegildaPremium(
    EmplAge,
    WorDep,
    Sect,
    Div,
    BrithMun,
    BloodTy,
    SBMA,
    District,
    JacPrem,
    PetPrem
  ) {
    /*
        En esta funcion se calcula el valor de la prima hermenegilda
        Parametros: Edad, Departamento de trabajo, Seccion, Division,
        Municipio de nacimiento, tipo de sangre, SBMA, Barrio, prima jacaranda, prima petunia.
        Salida: Prima hermenegilda
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (
      EmplAge >= 25 &&
      EmplAge < 30 &&
      WorDep == 3 &&
      ((Sect == 28 && Div == 2) || Sect == 16 || Sect == 17) &&
      BrithMun.equals("Guachucal")
    ) {
      return SBMA * 0.00003;
    } else if (
      EmplAge >= 30 &&
      EmplAge < 45 &&
      WorDep == 8 &&
      (BrithMun.equals("Fra Pizarro") ||
        BrithMun.equals("Samaniego") ||
        BrithMun.equals("Laguazaque") ||
        BrithMun.equals("Sn Js Pare")) &&
      BloodTy == 3 &&
      District.equals("Las Americas")
    ) {
      return JacPrem * 0.000015;
    } else if (
      EmplAge >= 45 &&
      EmplAge < 50 &&
      WorDep == 6 &&
      (BrithMun.equals("Sativasur") ||
        BrithMun.equals("Ventaquemada") ||
        BrithMun.equals("Guacari") ||
        BrithMun.equals("Sn Sebastian") ||
        BrithMun.equals("Lenguazaque")) &&
      BloodTy == 1 &&
      District.equals("El Valencia")
    ) {
      return PetPrem * 0.0005;
    } else {
      return 0;
    }
  }

  AgePremium(EmplAge, Fortnight) {
    /*
        En esta funcion se calcula el valor de la prima por edad
        Parametros: Edad, Quincena.
        Salida: Prima por edad
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (EmplAge >= 18 && EmplAge < 30) {
      return Fortnight * 0.01;
    } else if (EmplAge >= 30 && EmplAge < 40) {
      return Fortnight * 0.015;
    } else if (EmplAge >= 40 && EmplAge < 50) {
      return Fortnight * 0.02;
    } else if (EmplAge >= 50 && EmplAge < 60) {
      return Fortnight * 0.02;
    } else if (EmplAge >= 60 && EmplAge < 70) {
      return Fortnight * 0.025;
    } else {
      return 0;
    }
  }

  FeednigPremium(Fornight, SLMV) {
    /*
        En esta funcion se calcula el valor de la prima de alimentacion
        Parametros: Quincena, SMLV
        Salida: Prima de alimentacion
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (Fornight >= SLMV && Fornight < SLMV * 2) {
      return SLMV * 0.0333;
    } else if (Fornight >= SLMV * 2 && Fornight < SLMV * 4) {
      return SLMV * 0.0444;
    } else if (Fornight >= SLMV * 4 && Fornight < SLMV * 6) {
      return SLMV * 0.0555;
    } else if (Fornight >= SLMV * 6 && Fornight < SLMV * 8) {
      return SLMV * 0.0666;
    } else {
      return 0;
    }
  }

  ProductionPremium(WorDep, Sect, Fornight) {
    /*
        En esta funcion se calcula el valor de la prima de produccion
        Parametros: Departamento de trabajo, Seccion, Quincena. 
        Salida: Prima de alimentacion
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (WorDep == 3 && Sect == 22) {
      return Fornight * 0.0056;
    } else {
      return 0;
    }
  }

  ConsanguinityPremium(SBMA, BloodTy, BritDep, EmplAge, ExtrDomi) {
    /*
        En esta funcion se calcula el valor de la prima por consanguinidad
        Parametros: SBMA, Tipo de sangre, departamento de nacimiento, edad, extras dominicales.
        Salida: Prima de consanguinidad
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (
      BloodTy == 3 &&
      (BritDep == 30 || BritDep == 14) &&
      EmplAge % 2 == 0 &&
      factorial(ExtrDomi) <= 120
    ) {
      return SBMA * 0.00025;
    } else {
      return 0;
    }
  }

  isPrime(num) {
    /*
        En esta funcion evalua si un numero es primo
        Parametros: Numero
        Salida: Si es primo o no
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (num <= 1) {
      return false;
    }
    for (i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }

  factorial(num) {
    /*
        En esta funcion se calcula el factorial de un numero
        Parametros: Numero
        Salida: Factorial
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (num < 0) {
      return 0;
    }
    res = 1;
    for (i = 2; i <= num; i++) {
      res *= i;
    }
    return res;
  }

  Pension(SBMA, SMLV) {
    /*
        En esta funcion se calcula la pension del trabajador
        Parametros: SBMA, SMLV
        Salida: Pension
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (SBMA >= SMLV && SBMA < SMLV * 2) {
      return SBMA * 0.0258;
    } else if (SBMA >= SMLV * 2 && SBMA < SMLV * 4) {
      return SBMA * 0.0358;
    } else if (SBMA >= SMLV * 4 && SBMA < SMLV * 6) {
      return SBMA * 0.0458;
    } else if (SBMA >= SMLV * 6 && SBMA < SMLV * 8) {
      return SBMA * 0.0558;
    } else if (SBMA >= SMLV * 8 && SBMA < SMLV * 10) {
      return SBMA * 0.0658;
    } else if (SBMA >= 10 * SMLV) {
      return SBMA * 0.0258;
    } else {
      return 0;
    }
  }

  Health(SBMA, SMLV) {
    /*
        En esta funcion se calcula el subsidio de salud
        Parametros: SBMA, SMLV
        Salida: Subsidio de salud
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (SBMA >= SMLV && SBMA < SMLV * 2) {
      return SBMA * 0.0155;
    } else if (SBMA >= SMLV * 2 && SBMA < SMLV * 4) {
      return SBMA * 0.0286;
    } else if (SBMA >= SMLV * 4 && SBMA < SMLV * 6) {
      return SBMA * 0.0315;
    } else if (SBMA >= SMLV * 6 && SBMA < SMLV * 8) {
      return SBMA * 0.0438;
    } else if (SBMA >= SMLV * 8 && SBMA < SMLV * 10) {
      return SBMA * 0.05125;
    } else if (SBMA >= 10 * SMLV) {
      return SBMA * 0.0768;
    } else {
      return 0;
    }
  }

  Transport(SMLV, SBMA) {
    /*
        En esta funcion se calcula el subsidio de transporte
        Parametros: SBMA, SMLV
        Salida: Subsidio de transporte
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    if (SBMA <= SMLV * 2) {
      return SMLV * 0.12;
    } else {
      return 0;
    }
  }

  Day(SBMA) {
    /*
        En esta funcion se calcula el valor del dia
        Parametros: SBMA
        Salida: Valor del dia
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return SBMA / 30;
  }

  Fortnight(SBMA) {
    /*
        En esta funcion se calcula el valor de la quincena
        Parametros: SBMA
        Salida: Valor de la quincena
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return SBMA / 2;
  }

  Week(SBMA) {
    /*
        En esta funcion se calcula el valor de la semana
        Parametros: SBMA
        Salida: Valor del la semana
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return SBMA / 4;
  }

  Bimester(SBMA) {
    /*
        En esta funcion se calcula el valor del semestre
        Parametros: SBMA
        Salida: Valor del semestre
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return SBMA * 2;
  }

  Trimester(SBMA) {
    /*
        En esta funcion se calcula el valor del trimestre
        Parametros: SBMA
        Salida: Valor del trimestre
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return SBMA * 3;
  }

  Semester(SBMA) {
    /*
        En esta funcion se calcula el valor del semestre
        Parametros: SBMA
        Salida: Valor del semestre
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Trimester(SBMA) * 2;
  }

  Annual(SBMA) {
    /*
        En esta funcion se calcula el valor del año
        Parametros: SBMA
        Salida: Valor del año
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Semester(SBMA) * 2;
  }

  Quinquennium(SBMA) {
    /*
        En esta funcion se calcula el valor del quenio
        Parametros: SBMA
        Salida: Valor del quenio
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Annual(SBMA) * 5;
  }

  Hour(SBMA) {
    /*
        En esta funcion se calcula el valor de la hora
        Parametros: SBMA
        Salida: Valor del dia
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Day(SBMA) / 8;
  }

  Minute(SBMA) {
    /*
        En esta funcion se calcula el valor del minuto
        Parametros: SBMA
        Salida: Valor del minuto
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Hour(SBMA) / 60;
  }

  Second(SBMA) {
    /*
        En esta funcion se calcula el valor del segundo
        Parametros: SBMA
        Salida: Valor del segundo
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Minute(SBMA) / 60;
  }

  TenthSecond(SBMA) {
    /*
        En esta funcion se calcula el valor de la decima de segundo
        Parametros: SBMA
        Salida: Valor de la decima de segundo
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Second(SBMA) / 10;
  }

  HundredthSecond(SBMA) {
    /*
        En esta funcion se calcula el valor de la centesima de segundo
        Parametros: SBMA
        Salida: Valor de la centesima de segundo
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Second(SBMA) / 100;
  }

  Nanosecond(SBMA) {
    /*
        En esta funcion se calcula el valor del nanosegundo
        Parametros: SBMA
        Salida: Valor del nanosegundo
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Second(SBMA) / 1000000000;
  }

  Picosecond(SBMA) {
    /*
        En esta funcion se calcula el valor del picosegundo
        Parametros: SBMA
        Salida: Valor del picosegundo
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Second(SBMA) / Math.pow(10, 12);
  }

  Daytime(ExtrD, ExtrDVal) {
    /*
        En esta funcion se calcula el valor de las extras diurnas trabajadas
        Parametros: Extras diurnas, valor de las extras diurnas.
        Salida: Valor de las extras diurnas
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return ExtrD * ExtrDVal;
  }

  Nocturnal(ExtrN, ExtraNVal) {
    /*
        En esta funcion se calcula el valor de las extras nocturnas trabajadas
        Parametros: Extras diurnas, valor de las nocturnas diurnas.
        Salida: Valor de las extras nocturnas
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return ExtrN * ExtraNVal;
  }

  Sundays(ExtrS, ExtraSVal) {
    /*
        En esta funcion se calcula el valor de las extras dominicales trabajadas
        Parametros: Extras dominicales, valor de las dominicales diurnas.
        Salida: Valor de las extras diurnas
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return ExtrS * ExtraSVal;
  }

  Seconds(Seconds, ValuePerSecond) {
    /*
        En esta funcion se calcula el valor de lozs segundos extras rabajados
        Parametros: Segundos extras, valor de los segundos extras
        Salida: Valor de los segundos extras
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Seconds * ValuePerSecond;
  }

  Tenths(Tenths, ValuePerTenth) {
    /*
        En esta funcion se calcula el valor de las decimas de segundos extras rabajados
        Parametros: Decimas de segundos extra, valor de las decimas segundos extras
        Salida: Valor de las decimas segundos extras
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Tenths * ValuePerTenth;
  }

  Hundredths(Hundredths, ValuePerHundredth) {
    /*
        En esta funcion se calcula el valor de las centesimas  segundos extras rabajados
        Parametros: Centesimas de Segundos extras, valor de las centesimas segundos extras
        Salida: Valor de las centesimas de segundos extras
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Hundredths * ValuePerHundredth;
  }

  Nanoseconds(Nanoseconds, ValuePerNanosecond) {
    /*
        En esta funcion se calcula el valor de lozs nanosegundos extras rabajados
        Parametros: nanoSegundos extras, valor de los nanosegundos extras
        Salida: Valor de los nanosegundos extras
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Nanoseconds * ValuePerNanosecond;
  }

  Picoseconds(Picoseconds, ValuePerPicosecond) {
    /*
        En esta funcion se calcula el valor de lozs picosegundos extras rabajados
        Parametros: PicoSegundos extras, valor de los Picosegundos extras
        Salida: Valor de los picosegundos extras
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Picoseconds * ValuePerPicosecond;
  }

  Worked(
    EarnedSalary,
    DaytimeExtras,
    NocturnalExtras,
    SundayExtras,
    SecondsExtras,
    TenthsExtras,
    HundredthsExtras,
    NanosecondsExtras,
    PicosecondsExtras
  ) {
    /*
        En esta funcion se calcula el total trabajado
        Parametros: Valor de tiempo extra
        Salida: Pago de total trabajaso
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */

    return (
      EarnedSalary +
      DaytimeExtras +
      NocturnalExtras +
      SundayExtras +
      SecondsExtras +
      TenthsExtras +
      HundredthsExtras +
      NanosecondsExtras +
      PicosecondsExtras
    );
  }

  TotalPrem(Premiums) {
    /*
        En esta funcion se hace la sumatoria de todas las primas.    
        Parametros: Mapa donde se almacena el valor de las primas
        Salida: Total de primas
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    Sum = 0.0;
    for (const i in Premiums) {
      // Sumar el valor actual al total
      Sum += Premiums[i];
    }

    return Sum;
  }
  devengadSalary(DayW, Day) {
    /*
        En esta funcion se calcula el valor el tiempo trabajado
        Parametros: Dias trabajados, Valor del dia
        Salida: Salario devegado
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return DayW * Day;
  }

  totalsWorked(values) {
    /*
        En esta funcion se calcula el valor de el total trabajado
        Parametros: Valor de el tiempo trabajado
        Salida: Total trabajado
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    sum = 0.0;
    for (const i in values) {
      sum += value;
    }
    return sum;
  }
  CalcAge(BrithDate) {
    /*
        En esta funcion se calcula la edad cdel empleado
        Parametros: Fecha de nacimiento
        Salida: Edad
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return 1;
  }

  TotDevegad(TotalPremiums, TotalWorked, Transport) {
    /*
        En esta funcion se calcula el total devegado
        Parametros: Total de primas, Total trabajado, Subsidio de transporte
        Salida: Total devegado
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return TotalPremiums + TotalWorked + Transport;
  }

  Deducid(Discount, Health, Pension) {
    /*
        En esta funcion se calcula el total deducido
        Parametros: Descuentos, Salud, Pension.
        Salida: Total deducido
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Discount + Health + Pension;
  }

  Accrual(TotalPremiums, TotalWorked, Transport) {
    /*
        En esta funcion se calcula el total devegado
        Parametros: Total de primas, Total trabajado, Subsidio de transporte
        Salida: Total devegado
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return TotalPremiums + TotalWorked + Transport;
  }

  Net(Deducid, Accrual) {
    /*
        En esta funcion se calcula el total neto
        Parametros: Deducido, Devegado
        Salida: Neto a pagar
        Nombre: Juan Manuel Anacona
        contacto: anaconajuanma@itipopayan.edu.co
        */
    return Accrual - Deducid;
  }
}
