﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Shfyovshofyshv
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заказы.
    /// </summary>
    // *** Start programmer edit section *** (Запись CustomAttributes)

    // *** End programmer edit section *** (Запись CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказыE", new string[] {
            "Дата as \'Дата\'",
            "ТипОплаты as \'Тип оплаты\'",
            "Комментарий as \'Комментарий\'",
            "Сумма as \'Сумма\'"})]
    [AssociatedDetailViewAttribute("ЗаказыE", "ЗаказТапочек", "ЗаказТапочекE", true, "", "Заказ тапочек", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("ЗаказыE", "ЗаказСланцев", "ЗаказСланцевE", true, "", "Заказ сланцев", true, new string[] {
            ""})]
    [View("ЗаказыL", new string[] {
            "Дата as \'Дата\'",
            "ТипОплаты as \'Тип оплаты\'",
            "Комментарий as \'Комментарий\'",
            "Сумма as \'Сумма\'"})]
    [View("ЗаписьE", new string[] {
            "КодЗаписи as \'Код записи\'",
            "Дата as \'Дата\'",
            "ТипОплаты as \'Тип оплаты\'",
            "Время as \'Время\'",
            "Комментарий as \'Комментарий\'",
            "Сумма as \'Сумма\'",
            "Пациент as \'Пациент\'",
            "Пациент.Фамилия as \'Фамилия\'",
            "Сотрудник as \'Сотрудник\'",
            "Сотрудник.Фамилия as \'Фамилия\'",
            "Адрес as \'Адрес\'",
            "Адрес.Город as \'Город\'"}, Hidden=new string[] {
            "Пациент.Фамилия",
            "Сотрудник.Фамилия",
            "Адрес.Город"})]
    [AssociatedDetailViewAttribute("ЗаписьE", "ЗаказТапочек", "ЗаказТапочекE", true, "", "Заказ тапочек", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("ЗаписьE", "ЗаказСланцев", "ЗаказСланцевE", true, "", "Заказ сланцев", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ЗаписьE", "Пациент", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    [MasterViewDefineAttribute("ЗаписьE", "Сотрудник", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    [MasterViewDefineAttribute("ЗаписьE", "Адрес", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Город")]
    [View("ЗаписьL", new string[] {
            "КодЗаписи as \'Код записи\'",
            "Дата as \'Дата\'",
            "ТипОплаты as \'Тип оплаты\'",
            "Время as \'Время\'",
            "Комментарий as \'Комментарий\'",
            "Сумма as \'Сумма\'",
            "Пациент.Фамилия as \'Фамилия\'",
            "Сотрудник.Фамилия as \'Фамилия\'",
            "Адрес.Город as \'Город\'"})]
    public class Запись : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодЗаписи;
        
        private System.DateTime fДата;
        
        private IIS.Shfyovshofyshv.ТипОплаты fТипОплаты;
        
        private string fВремя;
        
        private string fКомментарий;
        
        private double fСумма;
        
        private IIS.Shfyovshofyshv.Пациент fПациент;
        
        private IIS.Shfyovshofyshv.Сотрудник fСотрудник;
        
        private IIS.Shfyovshofyshv.Адрес fАдрес;
        
        private IIS.Shfyovshofyshv.DetailArrayOfЗаказСланцев fЗаказСланцев;
        
        private IIS.Shfyovshofyshv.DetailArrayOfЗаказТапочек fЗаказТапочек;
        
        // *** Start programmer edit section *** (Запись CustomMembers)

        // *** End programmer edit section *** (Запись CustomMembers)

        
        /// <summary>
        /// Время.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Время CustomAttributes)

        // *** End programmer edit section *** (Запись.Время CustomAttributes)
        [StrLen(255)]
        public virtual string Время
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Время Get start)

                // *** End programmer edit section *** (Запись.Время Get start)
                string result = this.fВремя;
                // *** Start programmer edit section *** (Запись.Время Get end)

                // *** End programmer edit section *** (Запись.Время Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Время Set start)

                // *** End programmer edit section *** (Запись.Время Set start)
                this.fВремя = value;
                // *** Start programmer edit section *** (Запись.Время Set end)

                // *** End programmer edit section *** (Запись.Время Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Дата CustomAttributes)

        // *** End programmer edit section *** (Запись.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Дата Get start)

                // *** End programmer edit section *** (Запись.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Запись.Дата Get end)

                // *** End programmer edit section *** (Запись.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Дата Set start)

                // *** End programmer edit section *** (Запись.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Запись.Дата Set end)

                // *** End programmer edit section *** (Запись.Дата Set end)
            }
        }
        
        /// <summary>
        /// КодЗаписи.
        /// </summary>
        // *** Start programmer edit section *** (Запись.КодЗаписи CustomAttributes)

        // *** End programmer edit section *** (Запись.КодЗаписи CustomAttributes)
        public virtual int КодЗаписи
        {
            get
            {
                // *** Start programmer edit section *** (Запись.КодЗаписи Get start)

                // *** End programmer edit section *** (Запись.КодЗаписи Get start)
                int result = this.fКодЗаписи;
                // *** Start programmer edit section *** (Запись.КодЗаписи Get end)

                // *** End programmer edit section *** (Запись.КодЗаписи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.КодЗаписи Set start)

                // *** End programmer edit section *** (Запись.КодЗаписи Set start)
                this.fКодЗаписи = value;
                // *** Start programmer edit section *** (Запись.КодЗаписи Set end)

                // *** End programmer edit section *** (Запись.КодЗаписи Set end)
            }
        }
        
        /// <summary>
        /// Комментарий.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Комментарий CustomAttributes)

        // *** End programmer edit section *** (Запись.Комментарий CustomAttributes)
        [StrLen(255)]
        public virtual string Комментарий
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Комментарий Get start)

                // *** End programmer edit section *** (Запись.Комментарий Get start)
                string result = this.fКомментарий;
                // *** Start programmer edit section *** (Запись.Комментарий Get end)

                // *** End programmer edit section *** (Запись.Комментарий Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Комментарий Set start)

                // *** End programmer edit section *** (Запись.Комментарий Set start)
                this.fКомментарий = value;
                // *** Start programmer edit section *** (Запись.Комментарий Set end)

                // *** End programmer edit section *** (Запись.Комментарий Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Сумма CustomAttributes)

        // *** End programmer edit section *** (Запись.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Сумма Get start)

                // *** End programmer edit section *** (Запись.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (Запись.Сумма Get end)

                // *** End programmer edit section *** (Запись.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Сумма Set start)

                // *** End programmer edit section *** (Запись.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (Запись.Сумма Set end)

                // *** End programmer edit section *** (Запись.Сумма Set end)
            }
        }
        
        /// <summary>
        /// ТипОплаты.
        /// </summary>
        // *** Start programmer edit section *** (Запись.ТипОплаты CustomAttributes)

        // *** End programmer edit section *** (Запись.ТипОплаты CustomAttributes)
        public virtual IIS.Shfyovshofyshv.ТипОплаты ТипОплаты
        {
            get
            {
                // *** Start programmer edit section *** (Запись.ТипОплаты Get start)

                // *** End programmer edit section *** (Запись.ТипОплаты Get start)
                IIS.Shfyovshofyshv.ТипОплаты result = this.fТипОплаты;
                // *** Start programmer edit section *** (Запись.ТипОплаты Get end)

                // *** End programmer edit section *** (Запись.ТипОплаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.ТипОплаты Set start)

                // *** End programmer edit section *** (Запись.ТипОплаты Set start)
                this.fТипОплаты = value;
                // *** Start programmer edit section *** (Запись.ТипОплаты Set end)

                // *** End programmer edit section *** (Запись.ТипОплаты Set end)
            }
        }
        
        /// <summary>
        /// Заказы.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Адрес CustomAttributes)

        // *** End programmer edit section *** (Запись.Адрес CustomAttributes)
        [PropertyStorage(new string[] {
                "Адрес"})]
        [NotNull()]
        public virtual IIS.Shfyovshofyshv.Адрес Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Адрес Get start)

                // *** End programmer edit section *** (Запись.Адрес Get start)
                IIS.Shfyovshofyshv.Адрес result = this.fАдрес;
                // *** Start programmer edit section *** (Запись.Адрес Get end)

                // *** End programmer edit section *** (Запись.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Адрес Set start)

                // *** End programmer edit section *** (Запись.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Запись.Адрес Set end)

                // *** End programmer edit section *** (Запись.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Заказы.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Пациент CustomAttributes)

        // *** End programmer edit section *** (Запись.Пациент CustomAttributes)
        [PropertyStorage(new string[] {
                "Пациент"})]
        [NotNull()]
        public virtual IIS.Shfyovshofyshv.Пациент Пациент
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Пациент Get start)

                // *** End programmer edit section *** (Запись.Пациент Get start)
                IIS.Shfyovshofyshv.Пациент result = this.fПациент;
                // *** Start programmer edit section *** (Запись.Пациент Get end)

                // *** End programmer edit section *** (Запись.Пациент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Пациент Set start)

                // *** End programmer edit section *** (Запись.Пациент Set start)
                this.fПациент = value;
                // *** Start programmer edit section *** (Запись.Пациент Set end)

                // *** End programmer edit section *** (Запись.Пациент Set end)
            }
        }
        
        /// <summary>
        /// Заказы.
        /// </summary>
        // *** Start programmer edit section *** (Запись.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (Запись.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.Shfyovshofyshv.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (Запись.Сотрудник Get start)

                // *** End programmer edit section *** (Запись.Сотрудник Get start)
                IIS.Shfyovshofyshv.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (Запись.Сотрудник Get end)

                // *** End programmer edit section *** (Запись.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.Сотрудник Set start)

                // *** End programmer edit section *** (Запись.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (Запись.Сотрудник Set end)

                // *** End programmer edit section *** (Запись.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// Заказы.
        /// </summary>
        // *** Start programmer edit section *** (Запись.ЗаказСланцев CustomAttributes)

        // *** End programmer edit section *** (Запись.ЗаказСланцев CustomAttributes)
        public virtual IIS.Shfyovshofyshv.DetailArrayOfЗаказСланцев ЗаказСланцев
        {
            get
            {
                // *** Start programmer edit section *** (Запись.ЗаказСланцев Get start)

                // *** End programmer edit section *** (Запись.ЗаказСланцев Get start)
                if ((this.fЗаказСланцев == null))
                {
                    this.fЗаказСланцев = new IIS.Shfyovshofyshv.DetailArrayOfЗаказСланцев(this);
                }
                IIS.Shfyovshofyshv.DetailArrayOfЗаказСланцев result = this.fЗаказСланцев;
                // *** Start programmer edit section *** (Запись.ЗаказСланцев Get end)

                // *** End programmer edit section *** (Запись.ЗаказСланцев Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.ЗаказСланцев Set start)

                // *** End programmer edit section *** (Запись.ЗаказСланцев Set start)
                this.fЗаказСланцев = value;
                // *** Start programmer edit section *** (Запись.ЗаказСланцев Set end)

                // *** End programmer edit section *** (Запись.ЗаказСланцев Set end)
            }
        }
        
        /// <summary>
        /// Заказы.
        /// </summary>
        // *** Start programmer edit section *** (Запись.ЗаказТапочек CustomAttributes)

        // *** End programmer edit section *** (Запись.ЗаказТапочек CustomAttributes)
        public virtual IIS.Shfyovshofyshv.DetailArrayOfЗаказТапочек ЗаказТапочек
        {
            get
            {
                // *** Start programmer edit section *** (Запись.ЗаказТапочек Get start)

                // *** End programmer edit section *** (Запись.ЗаказТапочек Get start)
                if ((this.fЗаказТапочек == null))
                {
                    this.fЗаказТапочек = new IIS.Shfyovshofyshv.DetailArrayOfЗаказТапочек(this);
                }
                IIS.Shfyovshofyshv.DetailArrayOfЗаказТапочек result = this.fЗаказТапочек;
                // *** Start programmer edit section *** (Запись.ЗаказТапочек Get end)

                // *** End programmer edit section *** (Запись.ЗаказТапочек Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.ЗаказТапочек Set start)

                // *** End programmer edit section *** (Запись.ЗаказТапочек Set start)
                this.fЗаказТапочек = value;
                // *** Start programmer edit section *** (Запись.ЗаказТапочек Set end)

                // *** End programmer edit section *** (Запись.ЗаказТапочек Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказыE", typeof(IIS.Shfyovshofyshv.Запись));
                }
            }
            
            /// <summary>
            /// "ЗаказыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказыL", typeof(IIS.Shfyovshofyshv.Запись));
                }
            }
            
            /// <summary>
            /// "ЗаписьE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписьE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписьE", typeof(IIS.Shfyovshofyshv.Запись));
                }
            }
            
            /// <summary>
            /// "ЗаписьL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписьL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписьL", typeof(IIS.Shfyovshofyshv.Запись));
                }
            }
        }
    }
}
