function main() {
    class Message {
        static totalMessages = 0;
        static status = false;

        constructor(sender, receiver, messageContent) {
            this.sender = sender;
            this.receiver = receiver;
            this.messageContent = messageContent;
        }

        static recordMessage() {
            Message.totalMessages += 1;
        }

        static changeStatus() {
            Message.status = !Message.status;
            const statusText = Message.status ? "online" : "offline";
            console.log(`The status has been changed to ${statusText}`);
        }
        sendMessage() {
            console.log(`The message '${this.messageContent}' has been sent from '${this.sender}' to '${this.receiver}'`);
            Message.recordMessage(); 
        }

        displayDetails() {
            console.log(`Sender:${this.sender}`);
            console.log(`Receiver:${this.receiver}`);
            console.log(`Message:${this.messageContent}`);
            console.log(`Status:${Message.status ? "online" : "offline"}`);
            console.log(`Total Messages:${Message.totalMessages}`);
        }
    }
    Message.changeStatus();
    const myMessage = new Message("John", "Jane", "Hello");
    myMessage.sendMessage();
    myMessage.displayDetails(); 

    return Message;
}

main();
