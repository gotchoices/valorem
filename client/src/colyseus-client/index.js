async function testClient()
{
    return await createTestRoom();
}
async function createTestRoom() {
    let client = Colyseus.Client("ws://localhost:8000");
    const room = await client.create('my_room');
    console.log('Room created on client', room.id);
    return {client, room, buttonPressed: function()
    {
        this.room.send('message', 'Button was pressed on client!');
    }};
}