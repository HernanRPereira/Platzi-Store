import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
    
    @Get()
    getCustomer() {
        return {
            message: 'getCustomer'
        }
    }

    @Get(':id')
    getCustomerById(@Param('id') id: string) {
        return{
            message: `Customer ${id}`
        }
    }

    @Post()
    createCustomer(@Body() payload: any) {
        return {
            message: 'createCustomer',
            payload,
        }
    }
}
