import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = []
  
  getHello(): string {
    return 'Hello World!';
  }

  handleCreateUser(data: CreateUserEvent) {
    console.log('handleCreateUser - Microservices Analytics ', data)
    this.analytics.push({
      email: data.email,
      timestamp: new Date()
    })
  }

  getAnalytics(): any[] {
    console.log(this.analytics)
    return this.analytics
  }
}
