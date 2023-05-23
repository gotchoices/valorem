async function testClient() {
  return await createTestRoom();
}
async function createTestRoom() {
  let host = "tempusvalorem.net";
  let port = 8000;
  let proto = "wss";
  let client = Colyseus.Client(`${proto}://${host}:${port}`);
  const room = await client.create("my_room");
  console.log("Room created on client", room.id);
  return {
    client,
    room,
    buttonPressed: function () {
      this.room.send("message", "Button was pressed on client!");
    },
  };
}
