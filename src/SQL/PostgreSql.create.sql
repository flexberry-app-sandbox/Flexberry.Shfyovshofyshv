﻿




CREATE TABLE Пациент (
 primaryKey UUID NOT NULL,
 КодКлиента INT NULL,
 Фамилия VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 НомерТелефона INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ХарТапочек (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Размер INT NULL,
 Категория UUID NOT NULL,
 Тапочки UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаказТапочек (
 primaryKey UUID NOT NULL,
 Комментарий VARCHAR(255) NULL,
 Тапочки UUID NOT NULL,
 Запись UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Тапочки (
 primaryKey UUID NOT NULL,
 КодТапочек INT NULL,
 Наименование VARCHAR(255) NULL,
 Стоимость DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Адрес (
 primaryKey UUID NOT NULL,
 КодАдреса INT NULL,
 Город VARCHAR(255) NULL,
 Улица VARCHAR(255) NULL,
 Дом VARCHAR(255) NULL,
 Квартира INT NULL,
 Индекс INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Запись (
 primaryKey UUID NOT NULL,
 КодЗаписи INT NULL,
 Дата TIMESTAMP(3) NULL,
 ТипОплаты VARCHAR(10) NULL,
 Время VARCHAR(255) NULL,
 Комментарий VARCHAR(255) NULL,
 Сумма DOUBLE PRECISION NULL,
 Пациент UUID NOT NULL,
 Сотрудник UUID NOT NULL,
 Адрес UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сланцы (
 primaryKey UUID NOT NULL,
 КодСланцев INT NULL,
 Наименование VARCHAR(255) NULL,
 Стоимость DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 КодСотрудника INT NULL,
 Фамилия VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 НомерТелефона INT NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Категория (
 primaryKey UUID NOT NULL,
 КодКатегории INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должность (
 primaryKey UUID NOT NULL,
 КодДолжности INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаказСланцев (
 primaryKey UUID NOT NULL,
 Комментарий VARCHAR(255) NULL,
 Сланцы UUID NOT NULL,
 Запись UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ХарСланцев (
 primaryKey UUID NOT NULL,
 Количество INT NULL,
 Размер INT NULL,
 Категория UUID NOT NULL,
 Сланцы UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ХарТапочек ADD CONSTRAINT FK2e8b0c31dc808a7bf8f312cc8cee0c7509eccefa FOREIGN KEY (Категория) REFERENCES Категория; 
CREATE INDEX Index2e8b0c31dc808a7bf8f312cc8cee0c7509eccefa on ХарТапочек (Категория); 

 ALTER TABLE ХарТапочек ADD CONSTRAINT FKf55f98957cde652611ab3be2c40960ea3a436195 FOREIGN KEY (Тапочки) REFERENCES Тапочки; 
CREATE INDEX Indexf55f98957cde652611ab3be2c40960ea3a436195 on ХарТапочек (Тапочки); 

 ALTER TABLE ЗаказТапочек ADD CONSTRAINT FKe3dd13f8bfaaf985e9be83ec550b0164324097c1 FOREIGN KEY (Тапочки) REFERENCES Тапочки; 
CREATE INDEX Indexe3dd13f8bfaaf985e9be83ec550b0164324097c1 on ЗаказТапочек (Тапочки); 

 ALTER TABLE ЗаказТапочек ADD CONSTRAINT FKe5dd62eaa3b38ebb3ef3da445ba3b5a937c9855d FOREIGN KEY (Запись) REFERENCES Запись; 
CREATE INDEX Indexe5dd62eaa3b38ebb3ef3da445ba3b5a937c9855d on ЗаказТапочек (Запись); 

 ALTER TABLE Запись ADD CONSTRAINT FK5a22e0a12afed0d402d726b77d5db2ecae4a28ca FOREIGN KEY (Пациент) REFERENCES Пациент; 
CREATE INDEX Index5a22e0a12afed0d402d726b77d5db2ecae4a28ca on Запись (Пациент); 

 ALTER TABLE Запись ADD CONSTRAINT FKf5850b3b339cec39e0d339db751393dadb4d27a9 FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Indexf5850b3b339cec39e0d339db751393dadb4d27a9 on Запись (Сотрудник); 

 ALTER TABLE Запись ADD CONSTRAINT FKe67dddfa320ecd497e3058f4276b16ff54898732 FOREIGN KEY (Адрес) REFERENCES Адрес; 
CREATE INDEX Indexe67dddfa320ecd497e3058f4276b16ff54898732 on Запись (Адрес); 

 ALTER TABLE Сотрудник ADD CONSTRAINT FK52e78a286299ec0faa67b4f751a6cda2dec1a57a FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Index52e78a286299ec0faa67b4f751a6cda2dec1a57a on Сотрудник (Должность); 

 ALTER TABLE ЗаказСланцев ADD CONSTRAINT FK6558aa184354e87540738125dd1a595bc0fd6dea FOREIGN KEY (Сланцы) REFERENCES Сланцы; 
CREATE INDEX Index6558aa184354e87540738125dd1a595bc0fd6dea on ЗаказСланцев (Сланцы); 

 ALTER TABLE ЗаказСланцев ADD CONSTRAINT FK347fc33259a98a1432b94064e551fe1e118f7a6e FOREIGN KEY (Запись) REFERENCES Запись; 
CREATE INDEX Index347fc33259a98a1432b94064e551fe1e118f7a6e on ЗаказСланцев (Запись); 

 ALTER TABLE ХарСланцев ADD CONSTRAINT FKa76fa4ffb20b30ec8e70b2a1f207c9cc3c126d86 FOREIGN KEY (Категория) REFERENCES Категория; 
CREATE INDEX Indexa76fa4ffb20b30ec8e70b2a1f207c9cc3c126d86 on ХарСланцев (Категория); 

 ALTER TABLE ХарСланцев ADD CONSTRAINT FK17f09c556529acdf98034bc94d702e6e2df82da1 FOREIGN KEY (Сланцы) REFERENCES Сланцы; 
CREATE INDEX Index17f09c556529acdf98034bc94d702e6e2df82da1 on ХарСланцев (Сланцы); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

