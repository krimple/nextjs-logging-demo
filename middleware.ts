// middleware.js
import { NextResponse } from 'next/server';

import { rootLogger } from './logger';

export function middleware(request: Request) {
    const startTime = Date.now();
    const response = NextResponse.next();

    const logData = {
        method: request.method,
        url: request.url,
        statusCode: response.status,
        responseTime: Date.now() - startTime,
    };

    rootLogger.debug(JSON.stringify(logData)); // Or send to your logging service

    return response;
}