const { kafka } = require("./client");

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting.........");
    await admin.connect(); // Await the connection
    console.log("Admin connection success.....");
    console.log("Creating topic [rider-updated]"); // Corrected typo

    try {
        await admin.createTopics({
            topics: [
                {
                    topic: "rider-updated",
                    numPartitions: 2,
                },
            ],
        });
        console.log("Topic Created Success [rider-updated]");
    } catch (error) {
        console.error("Error creating topic:", error);
    } finally {
        console.log("Disconnecting admin...");
        await admin.disconnect();
        console.log("Admin disconnected.");
    }
}

init();
