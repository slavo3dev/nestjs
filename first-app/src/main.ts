import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";


@Controller()
class AppControler
{
    
    @Get()
    getRootRoute ()
    {
        return `Hi FirstApp`
    }
}


@Module( {
    controllers: [AppControler]
})
class AppModule
{
    
}

async function bootstrap() {
    const app = await NestFactory.create( AppModule )
    
    await app.listen(8001)
}

bootstrap()