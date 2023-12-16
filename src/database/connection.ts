import { connection, connect } from "mongoose";

export class ConnectionMongo {
    static connect() {
        try{
            connection.on( 'error', (error: any) => console.log('cannot connect to mongodb.error:  ', error) )
            .on('open', () => console.log('connected to mongodb'))
            .on('close', () => console.log('disconnect from mongodb'))
            connect(process.env.MONGO_URL as string)
        }catch(error: any) {
            console.log('cannot connect to mongodb.error:  ', error)
        }
    }

    static disconnect() {
        connection.close()
    }
}