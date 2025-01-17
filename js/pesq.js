
        // Dados de exemplo para marcas e modelos
        const data = {
            carro: {
                'Kia': ['Sorento', 'Mohave', 'Cerato', 'Picanto', 'Soul', 'Sportage', 'Cadenza', 'Optima', 'Bongo', 'Carnival','Carens'],
                'Chevrolet': ['Cobalt', 'Agile', 'Celta', 'Prisma', 'Classic', 'Meriva', 'Astra', 'Vectra', 'Zafira', 'Omega', 'Malibu', 'Cruze', 'Montana', 'S-10', 'Captiva', 'Camaro' ],
                'Renault':['Clio','Symbol','Sandero','Logan','Megane','Duster', 'Fluence'],
                'Citroën':['Xsara','Picasso','Air Cross','C5','C4','C4 Picasso', 'Grand C4', 'Picasso', 'C3', 'Jumper'],
                'Peugeot':['207', '307/SW', '308', '408', '3008', 'Partner', 'RCZ', 'Hoggar'],
                'Volkswagen':['Fox/Cross/Space', 'Gol/G4/Voyage/Parati/Saveiro','Polo', 'Golf', 'Bora', 'Passat/Variant', 'Jetta', 'Kombi', 'Touareg', 'Tiguan','Amarok'],
                'Suzuki':['Gran Vitara 2.0/V6', 'Jimny', 'SX-4'],
                'Mercedes-Benz': ['Classe B', 'Classe C', 'Classe C AMG', 'Classe CL Coupé', 'Classe CL Coupé AMG', 'Classe E', 'Classe E AMG', 'Classe G/GL/GLK', 'Classe S', 'Classe S AMG', 'Classe CLS', 'CLS 63 AMG', 'Classe M', 'Classe SLK', 'Classe SL', 'Classe SL AMG', 'Classe R', 'Sprinter'],
                'Mitsubishi':['Pajero TR-4', 'L200 ', 'L200 Triton', 'Pajero Full', 'Pajero Sport', 'Pajero Dakar', 'Outlander', 'Lancer'],
                'Nissan':['March','Livina', 'Sentra', 'Tiida','Versa', 'Frontier'],
                'Toyota':['Corolla','Hillux','SW4','Rav 4', 'Camry'],
                'Chrysler':['Chrysler 300C', 'Chrysler Town & Country'],
                'Jeep':['Cherokee', 'Compass', 'Grand Cherokee', 'Wrangler', 'Renegade'],
                'Dodge':['Journey','Durango', 'Ram 2500'],
                'Honda':['Civic', 'Fit','City', 'Accord', 'CR-V','HR-V'],
                'Ford': ['Ka', 'Fiesta', 'Focus', 'Ecosport', 'Edge', 'Ranger CD', 'Ranger CS', 'F250', 'New Fiesta', 'Courier', 'Fusion'],
                'Porsche': ['Boxter', 'Cayenne', 'Cayman', 'Panamera', '911'],
                'Hyundai': ['Azera', 'Elantra', 'I30', 'Sonata', 'Veloster', 'IX35', 'Santa Fé', 'Tucson','Vera Cruz'],
                'Fiat': ['Mille', 'Palio/Wekkend', 'Siena', 'Grand Siena', 'Idea', 'Punto', 'Linea', 'Doblô', 'Fiorino', 'Uno', 'Strada', 'Strada Fire', '500', 'Bravo', 'Freemont'],
                'Cherry':['Tggo 2','Tiggo 5x','Tiggo 7','Tiggo 8'],
                'Audi':['A3', 'A4', 'A5','A5 Quattro','A6 Quattro','A7', 'Q3','Q5 Quattro', 'Q7 Quattro', 'Q8 quattro'],
                'Lamborghini': ['Urus', 'Huracan EVO', 'Aventador SVJ', 'Aventador S']
            },
            moto: {
                'Honda': ['CB500', 'CBR600'],
                'Yamaha': ['MT-07', 'R1']
            },
        };

        // Dados de exemplo para filtros
        const filters = [
        { vehicle: 'carro', brand: 'Kia', model: 'Sorento', engine: '2.4 e 3.5 V6', year: '2002 - 2021', airFilter: 'Mobil 1 5W-30, Mobil 1 OW30 Advanced Fuel Economy' },
        { vehicle: 'carro', brand: 'Kia', model: 'Mohave', engine: '3.8 4.6 3.0', year: '2009 - 2019', airFilter: 'Mobil 1 5W-30, Mobil 1 OW-40' },
        { vehicle: 'carro', brand: 'Kia', model: 'Cerato', engine: '1.6 e 2.0', year: '2004 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Kia', model: 'Picanto', engine: '1.0', year: '2004 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Kia', model: 'Soul', engine: '1.6', year: '2008 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Kia', model: 'Sportage', engine: '2.0 e 2.4', year: '2000 - 2022', airFilter: 'Mobil Super EcoPower 5W-30' },
        { vehicle: 'carro', brand: 'Kia', model: 'Cadenza', engine: '3.5', year: '2010 - 2022', airFilter: 'Mobil 1 Extended Performance 5W-30' },
        { vehicle: 'carro', brand: 'Kia', model: 'Optima', engine: '2.4', year: '2000 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Kia', model: 'Bongo', engine: '2.5', year: '1997 - 2022', airFilter: 'Mobil Delvac MX ESP 15W-40' },
        { vehicle: 'carro', brand: 'Kia', model: 'Carnival', engine: '2.2 e 3.5', year: '2004 - 2022', airFilter: 'Mobil 1 Turbo Diesel 5W-40' },
        { vehicle: 'carro', brand: 'Kia', model: 'Carens', engine: '2.0', year: '1999 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },

        // Chevrolet
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Cobalt', engine: '1.4 e 1.8', year: '2011 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 5W-30' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Agile', engine: '1.4', year: '2009 - 2016', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Celta', engine: '1.0', year: '2000 - 2015', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Prisma', engine: '1.4', year: '2006 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Classic', engine: '1.0', year: '1994 - 2016', airFilter: 'Mobil 1 Extended Performance 5W-30' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Meriva', engine: '1.8', year: '2002 - 2012', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Astra', engine: '1.8 e 2.0', year: '1999 - 2011', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Vectra', engine: '2.0 e 2.2', year: '1996 - 2011', airFilter: 'Mobil 1 Turbo Diesel 5W-40' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Zafira', engine: '2.0', year: '2001 - 2012', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Omega', engine: '3.6', year: '1998 - 2012', airFilter: 'Mobil 1 Extended Performance 5W-30' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Malibu', engine: '2.4', year: '2010 - 2012', airFilter: 'Mobil 1 ESP 0W-30' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Cruze', engine: '1.4 Turbo', year: '2011 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Montana', engine: '1.4', year: '2003 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'S-10', engine: '2.8 Turbo Diesel', year: '1995 - 2022', airFilter: 'Mobil Delvac MX ESP 15W-40' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Captiva', engine: '2.4 e 3.0', year: '2008 - 2018', airFilter: 'Mobil 1 Turbo Diesel Truck 5W-40' },
        { vehicle: 'carro', brand: 'Chevrolet', model: 'Camaro', engine: '6.2 V8', year: '2010 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },

        // Renault
        { vehicle: 'carro', brand: 'Renault', model: 'Clio', engine: '1.0 e 1.6', year: '1996 - 2017', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Renault', model: 'Symbol', engine: '1.6', year: '2009 - 2014', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Renault', model: 'Sandero', engine: '1.0 e 1.6', year: '2007 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Renault', model: 'Logan', engine: '1.0 e 1.6', year: '2004 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Renault', model: 'Megane', engine: '1.6, 2.0 e 2.0 Turbo', year: '1999 - 2014', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Renault', model: 'Duster', engine: '1.6 e 2.0', year: '2011 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Renault', model: 'Fluence', engine: '2.0', year: '2010 - 2017', airFilter: 'Mobil Super Sintético 5W-30' },

        // Citroen
        { vehicle: 'carro', brand: 'Citroën', model: 'Xsara', engine: '1.6 e 2.0', year: '1997 - 2010', airFilter: 'Mobil 1 Advanced Fuel Economy 5W-30' },
        { vehicle: 'carro', brand: 'Citroën', model: 'Picasso', engine: '1.6 e 2.0', year: '2001 - 2012', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Citroën', model: 'Air Cross', engine: '1.5 e 1.6', year: '2010 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Citroën', model: 'C5', engine: '2.0 e 3.0 V6', year: '2000 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Citroën', model: 'C4', engine: '1.6 e 2.0', year: '2004 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Citroën', model: 'C4 Picasso', engine: '1.6 e 2.0', year: '2006 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Citroën', model: 'Grand C4', engine: '1.6 e 2.0', year: '2006 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Citroën', model: 'C3', engine: '1.2 e 1.6', year: '2002 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Citroën', model: 'Jumper', engine: '2.3 Turbo Diesel', year: '2008 - 2022', airFilter: 'Mobil Delvac MX ESP 15W-40' },

        // Peugeoat

        { vehicle: 'carro', brand: 'Peugeot', model: '207', engine: '1.4 e 1.6', year: '2006 - 2015', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Peugeot', model: '307/SW', engine: '1.6 e 2.0', year: '2001 - 2008', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Peugeot', model: '308', engine: '1.6 e 2.0', year: '2007 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Peugeot', model: '408', engine: '2.0', year: '2010 - 2017', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Peugeot', model: '3008', engine: '1.6 e 2.0', year: '2008 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Peugeot', model: 'Partner', engine: '1.6', year: '2008 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Peugeot', model: 'RCZ', engine: '1.6 e 2.0', year: '2009 - 2015', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Peugeot', model: 'Hoggar', engine: '1.6 e 2.0', year: '2010 - 2015', airFilter: 'Mobil 1 Advanced Fuel Economy 5W-30' },

        // Volkswagem

        { vehicle: 'carro', brand: 'Volkswagen', model: 'Fox/Cross/Space', engine: '1.0, 1.6', year: '2003 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Volkswagen', model: 'Gol/G4/Voyage/Parati/Saveiro', engine: '1.0, 1.6', year: '2000 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Volkswagen', model: 'Polo', engine: '1.0, 1.6', year: '2001 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Volkswagen', model: 'Golf', engine: '1.6, 2.0', year: '2001 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Volkswagen', model: 'Bora', engine: '2.0', year: '2002 - 2009', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Volkswagen', model: 'Passat/Variant', engine: '1.8 e 2.0', year: '2001 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Volkswagen', model: 'Jetta', engine: '1.4, 2.0', year: '2005 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Volkswagen', model: 'Kombi', engine: '1.4', year: '2000 - 2014', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Volkswagen', model: 'Touareg', engine: '3.0 V6', year: '2002 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Volkswagen', model: 'Tiguan', engine: '2.0', year: '2008 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Volkswagen', model: 'Amarok', engine: '2.0', year: '2010 - 2022', airFilter: 'Mobil 1 FS 5W-40' },

        //Suzuki

        { vehicle: 'carro', brand: 'Suzuki', model: 'Gran Vitara 2.0/V6', engine: '2.0 e V6', year: '1997 - 2016', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Suzuki', model: 'Jimny', engine: '1.3 e 1.5', year: '1998 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Suzuki', model: 'SX-4', engine: '1.6', year: '2006 - 2014', airFilter: 'Mobil Super Sintético 5W-30' },

        // Mercedes
        { vehicle: 'carro', brand: 'Mercedes-Benz', model: 'Classe B', engine: '1.6 e 2.0', year: '2005 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Mercedes-Benz', model: 'Classe C', engine: '1.8, 2.0', year: '2000 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Mercedes-Benz', model: 'Classe C AMG', engine: '6.3 V8', year: '2008 - 2015', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Mercedes-Benz', model: 'Classe CL Coupé', engine: '5.5 V8', year: '2000 - 2014', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Mercedes-Benz', model: 'Classe E', engine: '2.0, 3.0', year: '1995 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Mercedes-Benz', model: 'Classe G/GL/GLK', engine: '3.0, 5.5 V8', year: '2000 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Mercedes-Benz', model: 'Classe S', engine: '3.0, 4.7 V8', year: '1992 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Mercedes-Benz', model: 'Classe CLS', engine: '3.0, 4.7 V8', year: '2005 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Mercedes-Benz', model: 'Sprinter', engine: '2.2', year: '2002 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },

        //Mitsubish

        { vehicle: 'carro', brand: 'Mitsubishi', model: 'Pajero TR-4', engine: '2.0, 2.4', year: '1997 - 2009', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Mitsubishi', model: 'L200', engine: '2.5, 3.2', year: '1996 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Mitsubishi', model: 'L200 Triton', engine: '2.4, 2.5', year: '2006 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Mitsubishi', model: 'Pajero Full', engine: '3.2, 3.8', year: '2000 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Mitsubishi', model: 'Pajero Sport', engine: '2.4, 3.0', year: '2000 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Mitsubishi', model: 'Pajero Dakar', engine: '3.2', year: '2005 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Mitsubishi', model: 'Outlander', engine: '2.0, 2.4', year: '2003 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Mitsubishi', model: 'Lancer', engine: '1.6, 2.0', year: '2000 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },

        //Nissan

        { vehicle: 'carro', brand: 'Nissan', model: 'March', engine: '1.0, 1.6', year: '2010 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Nissan', model: 'Livina', engine: '1.6', year: '2008 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Nissan', model: 'Sentra', engine: '2.0', year: '2001 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Nissan', model: 'Tiida', engine: '1.8', year: '2004 - 2014', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Nissan', model: 'Versa', engine: '1.6', year: '2011 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Nissan', model: 'Frontier', engine: '2.3, 2.5', year: '2005 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },

        //Toyota

        { vehicle: 'carro', brand: 'Toyota', model: 'Corolla', engine: '1.8, 2.0', year: '1995 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Toyota', model: 'Hilux', engine: '2.8, 3.0', year: '1996 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Toyota', model: 'SW4', engine: '2.7, 3.0', year: '2005 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Toyota', model: 'Rav 4', engine: '2.0, 2.5', year: '1996 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Toyota', model: 'Camry', engine: '2.4, 3.5', year: '2001 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },

        //Chrysler

        { vehicle: 'carro', brand: 'Chrysler', model: '300C', engine: '3.0, 5.7', year: '2004 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Chrysler', model: 'Town & Country', engine: '3.6', year: '2008 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },

        //Jeep

        { vehicle: 'carro', brand: 'Jeep', model: 'Cherokee', engine: '2.4, 3.2', year: '2000 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Jeep', model: 'Compass', engine: '2.0, 2.4', year: '2006 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Jeep', model: 'Grand Cherokee', engine: '3.0, 5.7 V8', year: '1992 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Jeep', model: 'Wrangler', engine: '2.8, 3.6', year: '2007 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Jeep', model: 'Renegade', engine: '1.8, 2.0', year: '2014 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },

        // Dodge

        { vehicle: 'carro', brand: 'Dodge', model: 'Journey', engine: '2.4, 3.6', year: '2009 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Dodge', model: 'Durango', engine: '3.6, 5.7', year: '1998 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Dodge', model: 'Ram 2500', engine: '6.7', year: '2003 - 2022', airFilter: 'Mobil 1 FS 5W-40' },

        // Honda

        { vehicle: 'carro', brand: 'Honda', model: 'Civic', engine: '1.8, 2.0', year: '1995 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Honda', model: 'Fit', engine: '1.4, 1.5', year: '2003 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Honda', model: 'City', engine: '1.5', year: '2009 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Honda', model: 'Accord', engine: '2.4, 3.5', year: '2001 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Honda', model: 'CR-V', engine: '2.0, 2.4', year: '1995 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Honda', model: 'HR-V', engine: '1.8', year: '2014 - 2022', airFilter: 'Mobil 1 FS 5W-40' },

        //Ford

        { vehicle: 'carro', brand: 'Ford', model: 'Ka', engine: '1.0, 1.6', year: '2009 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Ford', model: 'Fiesta', engine: '1.0, 1.6', year: '1995 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Ford', model: 'Focus', engine: '2.0', year: '1998 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Ford', model: 'Ecosport', engine: '1.6, 2.0', year: '2003 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Ford', model: 'Edge', engine: '3.5', year: '2007 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Ford', model: 'Ranger CD', engine: '2.2, 3.2', year: '2012 - 2022', airFilter: 'Mobil Super Sintético 5W-40' },
        { vehicle: 'carro', brand: 'Ford', model: 'F250', engine: '6.7', year: '1999 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Ford', model: 'New Fiesta', engine: '1.6', year: '2009 - 2022', airFilter: 'Mobil Super 3000 X1 5W-30' },
        { vehicle: 'carro', brand: 'Ford', model: 'Courier', engine: '1.6', year: '2016 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Ford', model: 'Fusion', engine: '2.5', year: '2005 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },

        //Porsche

        { vehicle: 'carro', brand: 'Porsche', model: 'Boxter', engine: '2.7, 3.2', year: '1997 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Porsche', model: 'Cayenne', engine: '3.6, 4.8', year: '2003 - 2022', airFilter: 'Mobil Super Sintético 5W-40' },
        { vehicle: 'carro', brand: 'Porsche', model: 'Cayman', engine: '2.7, 3.4', year: '2005 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Porsche', model: 'Panamera', engine: '3.0, 4.8', year: '2009 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Porsche', model: '911', engine: '3.0, 3.8', year: '1963 - 2022', airFilter: 'Mobil 1 FS 5W-40' },

        //Hyundai

        { vehicle: 'carro', brand: 'Hyundai', model: 'Azera', engine: '2.4, 3.5', year: '2006 - 2022', airFilter: 'Mobil 1 FS 5W-30' },
        { vehicle: 'carro', brand: 'Hyundai', model: 'Elantra', engine: '1.6, 2.0', year: '1990 - 2022', airFilter: 'Mobil Super 3000 X1 5W-30' },
        { vehicle: 'carro', brand: 'Hyundai', model: 'I30', engine: '1.6, 2.0', year: '2007 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Hyundai', model: 'Sonata', engine: '2.4, 2.5', year: '1989 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Hyundai', model: 'Veloster', engine: '1.6', year: '2011 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Hyundai', model: 'IX35', engine: '2.0', year: '2009 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Hyundai', model: 'Santa Fé', engine: '2.4, 2.7', year: '2000 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Hyundai', model: 'Tucson', engine: '2.0, 2.4', year: '2004 - 2022', airFilter: 'Mobil Super Sintético 5W-40' },
        { vehicle: 'carro', brand: 'Hyundai', model: 'Vera Cruz', engine: '3.8', year: '2006 - 2014', airFilter: 'Mobil 1 FS 5W-30' },

        //Fiat

        { vehicle: 'carro', brand: 'Fiat', model: 'Mille', engine: '1.0', year: '1990 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Palio/Wekkend', engine: '1.0, 1.6', year: '1996 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Siena', engine: '1.0, 1.6', year: '1997 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Grand Siena', engine: '1.4, 1.6', year: '2011 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Idea', engine: '1.4', year: '2005 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Punto', engine: '1.4', year: '2005 - 2022', airFilter: 'Mobil 1 FS 5W-30' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Linea', engine: '1.4, 1.8', year: '2008 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Doblô', engine: '1.8', year: '2003 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Fiorino', engine: '1.4', year: '2011 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Uno', engine: '1.0, 1.6', year: '1990 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Strada', engine: '1.4, 1.6', year: '1998 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Strada Fire', engine: '1.4', year: '2000 - 2022', airFilter: 'Mobil 1 FS 5W-30' },
        { vehicle: 'carro', brand: 'Fiat', model: '500', engine: '1.4', year: '2007 - 2022', airFilter: 'Mobil 1 ESP 5W-40' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Bravo', engine: '1.8', year: '2007 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Fiat', model: 'Freemont', engine: '2.4', year: '2011 - 2022', airFilter: 'Mobil Super 3000 X1 5W-40' },

        //Cherry

        { vehicle: 'carro', brand: 'Chery', model: 'Tiggo 2', engine: '1.0, 1.5', year: '2018 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Chery', model: 'Tiggo 5x', engine: '1.5', year: '2018 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Chery', model: 'Tiggo 7', engine: '1.5, 2.0', year: '2020 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Chery', model: 'Tiggo 8', engine: '1.6, 2.0', year: '2020 - 2022', airFilter: 'Mobil Super Sintético 5W-40' },

        //Audi

        { vehicle: 'carro', brand: 'Audi', model: 'A3', engine: '1.6, 2.0', year: '1996 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Audi', model: 'A4', engine: '1.8, 2.0, 3.0', year: '1994 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Audi', model: 'A5', engine: '2.0, 3.0', year: '2007 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Audi', model: 'A5 Quattro', engine: '2.0, 3.0', year: '2007 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Audi', model: 'A6 Quattro', engine: '2.0, 3.0', year: '1994 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Audi', model: 'A7', engine: '3.0', year: '2010 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Audi', model: 'Q3', engine: '2.0', year: '2011 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Audi', model: 'Q5 Quattro', engine: '2.0, 3.0', year: '2008 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Audi', model: 'Q7 Quattro', engine: '3.0, 4.2', year: '2006 - 2022', airFilter: 'Mobil Super Sintético 5W-30' },
        { vehicle: 'carro', brand: 'Audi', model: 'Q8 Quattro', engine: '3.0', year: '2018 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },

        //Lamborguini

        { vehicle: 'carro', brand: 'Lamborghini', model: 'Urus', engine: '4.0', year: '2018 - 2022', airFilter: 'Mobil 1 ESP 5W-30' },
        { vehicle: 'carro', brand: 'Lamborghini', model: 'Huracan EVO', engine: '5.2', year: '2019 - 2022', airFilter: 'Mobil 1 FS 5W-40' },
        { vehicle: 'carro', brand: 'Lamborghini', model: 'Aventador SVJ', engine: '6.5', year: '2018 - 2022', airFilter: 'Mobil 1 Advanced Fuel Economy 0W-30' },
        { vehicle: 'carro', brand: 'Lamborghini', model: 'Aventador S', engine: '6.5', year: '2017 - 2022', airFilter: 'Mobil 1 FS 5W-40' }

        ];

        const vehicleTypeSelect = document.getElementById('vehicle-type');
        const brandSelect = document.getElementById('brand');
        const modelSelect = document.getElementById('model');
        const searchButton = document.getElementById('search-button');
        const resultsTable = document.getElementById('results-table');
        const resultsTableBody = resultsTable.querySelector('tbody');

        vehicleTypeSelect.addEventListener('change', () => {
            const vehicleType = vehicleTypeSelect.value;
            brandSelect.innerHTML = '<option value="">Selecione</option>';
            modelSelect.innerHTML = '<option value="">Selecione</option>';
            modelSelect.disabled = true;
            searchButton.disabled = true;
            resultsTable.style.display = 'none';

            if (vehicleType && data[vehicleType]) {
                Object.keys(data[vehicleType]).forEach(brand => {
                    const option = document.createElement('option');
                    option.value = brand;
                    option.textContent = brand;
                    brandSelect.appendChild(option);
                });
                brandSelect.disabled = false;
            } else {
                brandSelect.disabled = true;
            }
        });

        brandSelect.addEventListener('change', () => {
            const vehicleType = vehicleTypeSelect.value;
            const brand = brandSelect.value;
            modelSelect.innerHTML = '<option value="">Selecione</option>';
            searchButton.disabled = true;
            resultsTable.style.display = 'none';

            if (brand && data[vehicleType][brand]) {
                data[vehicleType][brand].forEach(model => {
                    const option = document.createElement('option');
                    option.value = model;
                    option.textContent = model;
                    modelSelect.appendChild(option);
                });
                modelSelect.disabled = false;
            } else {
                modelSelect.disabled = true;
            }
        });

        modelSelect.addEventListener('change', () => {
            searchButton.disabled = !modelSelect.value;
            resultsTable.style.display = 'none';
        });

        searchButton.addEventListener('click', () => {
            const vehicleType = vehicleTypeSelect.value;
            const brand = brandSelect.value;
            const model = modelSelect.value;

            const filteredResults = filters.filter(filter =>
                filter.vehicle === vehicleType &&
                filter.brand === brand &&
                filter.model === model
            );

            resultsTableBody.innerHTML = '';
            filteredResults.forEach(result => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${result.model}</td>
                    <td>${result.engine}</td>
                    <td>${result.year}</td>
                    <td>${result.airFilter}</td>
                `;
                resultsTableBody.appendChild(row);
            });

            resultsTable.style.display = filteredResults.length > 0 ? 'table' : 'none';
        });
