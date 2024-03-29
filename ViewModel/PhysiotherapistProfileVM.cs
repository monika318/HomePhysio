﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomePhysio.ViewModel
{
    public class PhysiotherapistProfileVM
    {
        public int AppointmentId { get; set; }

        public DateTime DateAndTime { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }

        public string Status { get; set; }
        public string PatientName { get; set; }

        public string Longitude { get; set; }
        public string Latitude { get; set; }
        public string Address { get; set; }
        public string PAddress { get; set; }

        public string PLongitude { get; set; }
        public string PLatitude { get; set; }

        public string PContactNo { get; set; }

    }
}
