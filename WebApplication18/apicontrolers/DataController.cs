using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Threading;
using System.Web.Http;
using WebApplication18.Dal;

namespace WebApplication18.apicontrolers
{
    public class DataController : ApiController
    {
        [AcceptVerbs("Post")]
        public MenuResponse GetMenuItems(dynamic request)
        {
            var dataRequest = this.ConvertStupidArgumentToNormalRequset<DataRequest>(request);
            SqlConnection connection = initializeConnection();
            var res = new MenuResponse();
            var menuItemsList = new List<MenuItem>();
            try
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand("MenuItemsSelect", connection);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        double order = Convert.ToDouble(reader["Order"]);
                        int id = Convert.ToInt32(reader["ID"]);
                        string text_English = reader["Text_English"].ToString();
                        string Text_Hebrew = reader["Text_Hebrew"].ToString();
                        bool isDefault = bool.Parse(reader["IsDefault"].ToString());
                        string name = reader["Name"].ToString();
                        var item = new MenuItem(id, order, text_English, Text_Hebrew, isDefault, name);
                        menuItemsList.Add(item);
                    }
                }
                res.MenuItems = menuItemsList.ToArray();
                return res;
            }


            finally
            {
                connection.Close();
            }
        }

        [AcceptVerbs("Post")]
        public LinksResponse GetLinks(dynamic request)
        {
            var dataRequest = this.ConvertStupidArgumentToNormalRequset<DataRequest>(request);
            LinksResponse res = new LinksResponse();
            SqlConnection connection = initializeConnection();
            try
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand("LinksSelect", connection);
                cmd.Parameters.AddWithValue("@txt_lang", "Text_Eng");
                cmd.Parameters.AddWithValue("@add_lang", "Address_Eng");
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                List<Link> linksList = new List<Link>();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var id = Convert.ToInt32(reader["ID"].ToString());

                        //var text_heb = reader["Text_Heb"].ToString();
                        var text = reader["Text"].ToString();
                        var address = reader["Address"].ToString();
                        //var address_heb = reader["Address_Heb"].ToString();
                        //var text_eng = reader["Text_Eng"].ToString();
                        //var address_eng = reader["Address_Eng"].ToString();
                        //var order = Convert.ToDouble(reader["Order"].ToString());
                        var timestamp = Convert.ToDateTime(reader["Date"].ToString());
                        var link = new Link(id, text, address, timestamp);
                        linksList.Add(link);
                    }
                }
                res.Links = linksList.ToArray();
                return res;
            }
            finally
            {
                connection.Close();
            }
        }


        [AcceptVerbs("Post")]
        public UpdateRsponse GetUpdates(object request)
        {

            var calendarRequest = this.ConvertStupidArgumentToNormalRequset<DataRequest>(request);
            SqlConnection con = initializeConnection();
            try
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("HotUpdatesSelect", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@lang", "Data_Eng");
                List<Update> updates = new List<Update>();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Update update = new Update()
                        {
                            ID = Convert.ToInt32(reader["ID"]),
                            Order = Convert.ToDouble(reader["Order"]),
                            Text = reader["Text"].ToString(),
                            TimeStamp = Convert.ToDateTime(reader["TimeStamp"]),
                        };
                        updates.Add(update);
                    }
                }
                return new UpdateRsponse() { Updates = updates.ToArray() };

            }
            finally
            {
                con.Close();
            }
        }

        [AcceptVerbs("Post")]
        public PressResponse GetPress(object request)
        {

            var calendarRequest = this.ConvertStupidArgumentToNormalRequset<DataRequest>(request);
            SqlConnection con = initializeConnection();
            try
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("PressSelect", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@lang", "Eng");
                List<PressItem> presses = new List<PressItem>();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        PressItem item = new PressItem()
                        {
                            ID = Convert.ToInt32(reader["ID"]),

                            Text = reader["Text"].ToString(),
                            TimeStamp = Convert.ToDateTime(reader["TimeStamp"]),
                        };
                        presses.Add(item);
                    }
                }
                return new PressResponse() { PressItems = presses.ToArray() };

            }
            finally
            {
                con.Close();
            }
        }

        [AcceptVerbs("Post")]
        public CalendarResponse GetCalendar(object request)
        {
            var calendarRequest = this.ConvertStupidArgumentToNormalRequset<CalendarRequset>(request);
            SqlConnection con = initializeConnection();
            try
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("CalendarItemSelect_New", con);
                cmd.Parameters.AddWithValue("@lang", "Text_Eng");
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                List<CalendarItem> list = new List<CalendarItem>();
                CalendarItem resultItem = null;
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        CalendarItem item = new CalendarItem();
                        item.TimeStamp = Convert.ToDateTime(reader["TimeStamp"]);
                        item.Visible = Convert.ToBoolean(reader["Visible"]);
                        item.Text = reader["Text"].ToString();
                        item.DataDate = Convert.ToDateTime(reader["DataDate"]).Date;
                        item.ID = Convert.ToInt32(reader["ID"]);
                        list.Add(item);
                    }
                }
                switch (calendarRequest.NextData)
                {
                    case NextData.Next:
                        resultItem = list.FirstOrDefault(i => i.DataDate.Date > calendarRequest.CurrentCalendarDate);
                        if (resultItem == null)
                            resultItem = list.FirstOrDefault(i => i.DataDate == calendarRequest.CurrentCalendarDate);
                        if (resultItem == null)
                            resultItem = list.LastOrDefault(i => i.DataDate < calendarRequest.CurrentCalendarDate);
                        if (resultItem == null)
                        {
                            throw new Exception();
                        }
                        break;
                    case NextData.Prev:
                        resultItem = list.LastOrDefault(i => i.DataDate < calendarRequest.CurrentCalendarDate);
                        if (resultItem == null)
                            resultItem = list.FirstOrDefault(i => i.DataDate == calendarRequest.CurrentCalendarDate);
                        if (resultItem == null)
                            resultItem = list.FirstOrDefault(i => i.DataDate > calendarRequest.CurrentCalendarDate);
                        if (resultItem == null)
                        {
                            throw new Exception();
                        }
                        break;
                    case NextData.Current:
                        resultItem = list.FirstOrDefault(i => i.DataDate == calendarRequest.CurrentCalendarDate);
                        if (resultItem == null)
                            resultItem = list.FirstOrDefault(i => i.DataDate > calendarRequest.CurrentCalendarDate);
                        if (resultItem == null)
                            resultItem = list.LastOrDefault(i => i.DataDate < calendarRequest.CurrentCalendarDate);
                        if (resultItem == null)
                        {
                            throw new Exception();
                        }
                        break;
                }
                return new CalendarResponse() { CalendarItem = resultItem };
            }
            finally
            {
                con.Close();
            }
        }

        private static SqlConnection initializeConnection()
        {
            SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["testDB"].ConnectionString);

            return connection;
        }

        [AcceptVerbs("Post")]
        public MessageResponse SendMessage(object request)
        {
            var messageRequest = this.ConvertStupidArgumentToNormalRequset<MessageRequest>(request);
            var message = messageRequest.Message;
            MessageResponse respone = new MessageResponse();
            MailAddress mailfrom = new MailAddress("noyaschleien@noyaschleien.com");
            MailAddress mailto = new MailAddress("liorgish@gmail.com");
            MailMessage newmsg = new MailMessage(mailfrom, mailto);
            string senderName = message.Sender.Name;
            string senderEmail = message.Sender.Email;
            string senderMessage = message.Content;
            newmsg.Subject = "noyaschleien@noyaschleien.com";
            newmsg.Body = $"{senderName}\n{senderEmail}\n{senderMessage}\n{message.IP}\n{message.Date}";
            SmtpClient smtp = new SmtpClient("relay-hosting.secureserver.net", 25);
            smtp.Send(newmsg);
            return respone;
        }

        [AcceptVerbs("Post")]
        public ProgramsResponse GetPrograms(DataRequest request)
        {

            SqlConnection connection = initializeConnection();
            try
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand("ProgramsSelect", connection);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@lang", "Eng");
                List<Program> prgs = new List<Program>();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Program prg = new Program();
                        prg.ID = Convert.ToInt32(reader["ID"].ToString());
                        prg.Name = reader["Name"].ToString();
                        prg.Text = reader["Text"].ToString();
                        prg.Order = Convert.ToDouble(reader["Order"].ToString());
                        prg.TimeStamp = Convert.ToDateTime(reader["TimeStamp"].ToString());
                        prgs.Add(prg);
                    }

                }
                return new ProgramsResponse() { Programs = prgs.ToArray() };
            }
            finally
            {

                connection.Close();
            }

        }

        [AcceptVerbs("Post")]
        public CVResponse GetCV(DataRequest request)
        {

            SqlConnection connection = initializeConnection();
            try
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand("CVSelect", connection);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@lang", "Eng");
                List<CV> cvs = new List<CV>();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        CV cv = new CV();
                        cv.ID = Convert.ToInt32(reader["ID"].ToString());
                        cv.Text = reader["Text"].ToString();
                        cv.TimeStamp = Convert.ToDateTime(reader["TimeStamp"].ToString());
                        cvs.Add(cv);
                    }
                }
                return new CVResponse() { CVs = cvs.ToArray() };
            }
            finally
            {
                connection.Close();
            }

        }

        [AcceptVerbs("Post")]
        public ImageGalleryResponse GetImages(object request)
        {

            ImageGalleryRequest imageGalleryRequest = this.ConvertStupidArgumentToNormalRequset<ImageGalleryRequest>(request);
            ImageGalleryItem item = null;
            SqlConnection con = initializeConnection();
            try
            {
                con.Open();
                SqlCommand cmd = new SqlCommand("ImagesGallery_NewSelect", con);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                List<ImageGalleryItem> rawList = new List<ImageGalleryItem>();
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        ImageGalleryItem imageGalleryItem = new ImageGalleryItem()
                        {
                            ID = Convert.ToInt32(reader["ID"]),
                            ImageID = Convert.ToString(reader["ImageID"]),
                          
                            ImageURL = Convert.ToString(reader["ImageURL"]),
                            Order = Convert.ToDouble(reader["Order"]),
                            TimeStamp = Convert.ToDateTime(reader["TimeStamp"]),
                            Visible = Convert.ToBoolean(reader["Visible"])
                        };
                        rawList.Add(imageGalleryItem);
                    }
                }

                ImageGalleryResponse imageGalleryResponse = null;
                switch (imageGalleryRequest.DataAmount)
                {
                    case DataAmount.All:
                        imageGalleryResponse = LoadAllImage(imageGalleryRequest, rawList);
                        break;
                    case DataAmount.Single:
                        imageGalleryResponse = LoadSingleImage(imageGalleryRequest, rawList);
                        break;

                        break;
                }

                return imageGalleryResponse;
            }
            catch (Exception)
            {

                throw;
            }
        }

        private static ImageGalleryResponse LoadAllImage(ImageGalleryRequest imageGalleryRequest, List<ImageGalleryItem> rawList)
        {
            //IEnumerable<ImageGalleryItem> items = null;
            //switch (imageGalleryRequest.NextData)
            //{
            //    case NextData.Next:
            //        items = rawList.Where(i => i.ID > imageGalleryRequest.CurrentImageID);
            //        if (items == null)
            //            item = rawList.First();
            //        break;
            //    case NextData.Prev:
            //        item = rawList.LastOrDefault(i => i.ID < imageGalleryRequest.CurrentImageID);
            //        if (item == null)
            //            item = rawList.Last();
            //        break;
            //    case NextData.Current:
            //        item = rawList.FirstOrDefault(i => i.ID == imageGalleryRequest.CurrentImageID);
            //        if (item == null)
            //            item = rawList.FirstOrDefault(i => i.ID > imageGalleryRequest.CurrentImageID);
            //        if (item == null)
            //            item = rawList.LastOrDefault(i => i.ID < imageGalleryRequest.CurrentImageID);
            //        break;


            //}

            return new ImageGalleryResponse() { Images = rawList.ToArray() };
        }

        private static ImageGalleryResponse LoadSingleImage(ImageGalleryRequest imageGalleryRequest, List<ImageGalleryItem> rawList)
        {
            ImageGalleryItem item = null;
            switch (imageGalleryRequest.NextData)
            {
                case NextData.Next:
                    item = rawList.FirstOrDefault(i => i.ID > imageGalleryRequest.CurrentImageID);
                    if (item == null)
                        item = rawList.First();
                    break;
                case NextData.Prev:
                    item = rawList.LastOrDefault(i => i.ID < imageGalleryRequest.CurrentImageID);
                    if (item == null)
                        item = rawList.Last();
                    break;
                case NextData.Current:
                    item = rawList.FirstOrDefault(i => i.ID == imageGalleryRequest.CurrentImageID);
                    if (item == null)
                        item = rawList.FirstOrDefault(i => i.ID > imageGalleryRequest.CurrentImageID);
                    if (item == null)
                        item = rawList.LastOrDefault(i => i.ID < imageGalleryRequest.CurrentImageID);
                    break;


            }

            return new ImageGalleryResponse() { Image = item };
        }

        private T ConvertStupidArgumentToNormalRequset<T>(object request) where T : DataRequest
        {
            JObject jObject = JObject.Parse(request.ToString());
            var parsed = jObject.First.FirstOrDefault().ToObject<T>();
            return parsed;
        }
    }

    public class OrderComparer : IComparer<double>
    {
        public int Compare(double x, double y)
        {
            if (x > y || x == y) return 1;
            if (x < y) return -1;
            return 0;
        }
    }
}
