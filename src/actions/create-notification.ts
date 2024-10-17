"use server";

import { NotificationType } from "@/components/form";
import { pusherServer } from "@/lib/pusher";

export const createNotification = async (data: NotificationType) => {
  try {
    await pusherServer.trigger("test", "notification:new", data);
    return true;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
