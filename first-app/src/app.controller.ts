import { Controller, Get } from "@nestjs/common";


@Controller()
export class AppControler
{
    
    @Get()
    getRootRoute ()
    {
        return `Welcome to slavo.io - First NestJS App`
    }
}