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
    /// Заказ сланцев.
    /// </summary>
    // *** Start programmer edit section *** (ЗаказСланцев CustomAttributes)

    // *** End programmer edit section *** (ЗаказСланцев CustomAttributes)
    [AutoAltered()]
    [Caption("Заказ сланцев")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказСланцевE", new string[] {
            "Комментарий as \'Комментарий\'"})]
    public class ЗаказСланцев : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Shfyovshofyshv.Сланцы fСланцы;
        
        private IIS.Shfyovshofyshv.Запись fЗапись;
        
        // *** Start programmer edit section *** (ЗаказСланцев CustomMembers)

        // *** End programmer edit section *** (ЗаказСланцев CustomMembers)

        
        /// <summary>
        /// Заказ сланцев.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказСланцев.Сланцы CustomAttributes)

        // *** End programmer edit section *** (ЗаказСланцев.Сланцы CustomAttributes)
        [PropertyStorage(new string[] {
                "Сланцы"})]
        [NotNull()]
        public virtual IIS.Shfyovshofyshv.Сланцы Сланцы
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказСланцев.Сланцы Get start)

                // *** End programmer edit section *** (ЗаказСланцев.Сланцы Get start)
                IIS.Shfyovshofyshv.Сланцы result = this.fСланцы;
                // *** Start programmer edit section *** (ЗаказСланцев.Сланцы Get end)

                // *** End programmer edit section *** (ЗаказСланцев.Сланцы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказСланцев.Сланцы Set start)

                // *** End programmer edit section *** (ЗаказСланцев.Сланцы Set start)
                this.fСланцы = value;
                // *** Start programmer edit section *** (ЗаказСланцев.Сланцы Set end)

                // *** End programmer edit section *** (ЗаказСланцев.Сланцы Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Shfyovshofyshv.Запись.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказСланцев.Запись CustomAttributes)

        // *** End programmer edit section *** (ЗаказСланцев.Запись CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Запись"})]
        public virtual IIS.Shfyovshofyshv.Запись Запись
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказСланцев.Запись Get start)

                // *** End programmer edit section *** (ЗаказСланцев.Запись Get start)
                IIS.Shfyovshofyshv.Запись result = this.fЗапись;
                // *** Start programmer edit section *** (ЗаказСланцев.Запись Get end)

                // *** End programmer edit section *** (ЗаказСланцев.Запись Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказСланцев.Запись Set start)

                // *** End programmer edit section *** (ЗаказСланцев.Запись Set start)
                this.fЗапись = value;
                // *** Start programmer edit section *** (ЗаказСланцев.Запись Set end)

                // *** End programmer edit section *** (ЗаказСланцев.Запись Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказСланцевE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказСланцевE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказСланцевE", typeof(IIS.Shfyovshofyshv.ЗаказСланцев));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ЗаказСланцев.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfЗаказСланцев CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfЗаказСланцев CustomAttributes)
    public class DetailArrayOfЗаказСланцев : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Shfyovshofyshv.DetailArrayOfЗаказСланцев members)

        // *** End programmer edit section *** (IIS.Shfyovshofyshv.DetailArrayOfЗаказСланцев members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ЗаказСланцев by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ЗаказСланцев.
        /// </summary>
        public DetailArrayOfЗаказСланцев(IIS.Shfyovshofyshv.Запись fЗапись) : 
                base(typeof(ЗаказСланцев), ((ICSSoft.STORMNET.DataObject)(fЗапись)))
        {
        }
        
        public IIS.Shfyovshofyshv.ЗаказСланцев this[int index]
        {
            get
            {
                return ((IIS.Shfyovshofyshv.ЗаказСланцев)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Shfyovshofyshv.ЗаказСланцев dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
