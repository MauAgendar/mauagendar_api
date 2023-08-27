import express from "express";
import Appointment from "../controller/appointmentController";
const router = express.Router();

const appointment = new Appointment();

router.get(
    "/:userId/appointments",
    appointment.authenticate,
    appointment.getAppointment
);
router.post(
    "/:userId/appointments",
    appointment.authenticate,
    appointment.makeAppointments
);
router.put(
    "/:userId/appointments/:appointmentId",
    appointment.authenticate,
    appointment.updateUserAppointment
);
router.delete(
    "/:userId/appointments/:appointmentId",
    appointment.authenticate,
    appointment.deleteAppointment
);

export default router;
