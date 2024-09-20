const asyncHandler = require ("express-async-handler");

const Meeting = require("../models/meetingModel");

const conversationController = {
    scheduleMeeting: asyncHandler(async(req,res)=>{
        try {

           const employerId = req.cookies.userId;
           
            const { candidateId, date, time, duration, message, isZoomMeeting } = req.body;

            const meetingData = {
                employerId,
                candidateId,
                date,
                time,
                duration,
                message,
                isZoomMeeting
            };

            const savedMeeting = await Meeting.create(meetingData);

            res.status(201).json({
                success: true,
                message: "Meeting scheduled successfully",
                data: savedMeeting
            });
        } catch (error) {
          
            res.status(500).json({
                success: false,
                message: "Error scheduling meeting",
                error: error.message
            });
        }
        
    }),
    showMeetings:asyncHandler(async(req,res)=>{
        const employerId = req.cookies.userId;
       
        try {
            const meetings = await Meeting.find({employerId:employerId}); 
            
            res.status(200).json(meetings);
          } catch (error) {
            res.status(500).json({ message: "Error fetching meetings", error });
          }

    }),
    rescheduleMeeting: asyncHandler(async (req, res) => {
        try {
          const meetingId = req.query.meetingId;  
          const employerId = req.cookies.userId;  
      
          console.log("meeting:",meetingId)
          const { date, time, duration, message, isZoomMeeting } = req.body;
      
          const meetingData = {
            date,
            time,
            duration,
            message,
            isZoomMeeting
          };
             
          console.log(meetingId,employerId)

          const updatedMeeting = await Meeting.findOneAndUpdate(
            { _id: meetingId, employerId: employerId },  
            { $set: meetingData },  
            { new: true }  
          );
          console.log(updatedMeeting)
          if (!updatedMeeting) {
            return res.status(404).json({
              success: false,
              message: "Meeting not found"
            });
          }
      
          res.status(200).json({
            success: true,
            message: "Meeting rescheduled successfully",
            data: updatedMeeting
          });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: "Error rescheduling meeting",
            error: error.message
          });
        }
      }),
      removeMeeting:asyncHandler(async (req,res)=>{
        const { id } = req.params; // Assuming the meeting ID is sent as a URL parameter

        console.log(id);
        
        if (!id) {
            return res.status(400).json({ message: "Meeting ID is required" });
        }
    
        // Attempt to delete the meeting
        const deletedMeeting = await Meeting.findByIdAndDelete(id);
    
        if (!deletedMeeting) {
            return res.status(404).json({ message: "Meeting not found" });
        }
    
        res.status(200).json({ message: "Meeting deleted successfully" });
      }),
}

module.exports = conversationController;