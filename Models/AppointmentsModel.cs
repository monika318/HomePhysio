﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HomePhysio.Models
{
    public class AppointmentsModel
    {
        [Key]
        public int AppointmentId { get; set; }

        [ForeignKey(nameof(PhysioTimeSlotsData))]
        public int PhysioTimeSlotsId { get; set; }
        public virtual PhysioTimeSlotsModel PhysioTimeSlotsData { get; set; }


        [ForeignKey(nameof(PatientData))]
        public int PatientId { get; set; }
        public virtual PatientModel PatientData { get; set; }


        [ForeignKey(nameof(StatusData))]
        public string StatusCode { get; set; }
        public virtual StatusModel StatusData { get; set; }
        public decimal PaidAmount { get; set; }
        //[ForeignKey(nameof(PStatusData))]
        //public string PStatusCode { get; set; }
        //public PStatusModel PStatusData { get; set; }
    }
}
