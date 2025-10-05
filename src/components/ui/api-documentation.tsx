"use client"

import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  requestBody?: {
    required: boolean;
    schema: object;
    example?: object;
  };
  responses?: {
    [statusCode: string]: {
      description: string;
      example?: object;
    };
  };
  parameters?: {
    name: string;
    type: string;
    required: boolean;
    description: string;
  }[];
}

interface ApiDocumentationProps {
  endpoints: ApiEndpoint[];
  title?: string;
  description?: string;
}

const getMethodColor = (method: string) => {
  switch (method) {
    case 'GET':
      return 'bg-green-500 text-white';
    case 'POST':
      return 'bg-blue-500 text-white';
    case 'PUT':
      return 'bg-yellow-500 text-white';
    case 'DELETE':
      return 'bg-red-500 text-white';
    case 'PATCH':
      return 'bg-purple-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

const CodeBlock = ({ children, title }: { children: string; title?: string }) => (
  <div className="mt-3">
    {title && <p className="text-sm font-medium text-gray-700 mb-2">{title}</p>}
    <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto border">
      <code className="text-gray-800">{children}</code>
    </pre>
  </div>
);

const EndpointCard = ({ endpoint }: { endpoint: ApiEndpoint }) => (
  <Card className="p-6 mb-6">
    <div className="flex items-center gap-3 mb-4">
      <Badge className={`${getMethodColor(endpoint.method)} font-mono`}>
        {endpoint.method}
      </Badge>
      <code className="text-lg font-mono bg-gray-100 px-3 py-1 rounded">
        {endpoint.path}
      </code>
    </div>
    
    <p className="text-gray-700 mb-4">{endpoint.description}</p>

    {endpoint.parameters && endpoint.parameters.length > 0 && (
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Parameters</h4>
        <div className="space-y-2">
          {endpoint.parameters.map((param, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <code className="bg-gray-100 px-2 py-1 rounded">{param.name}</code>
              <Badge variant="outline">{param.type}</Badge>
              {param.required && <Badge className="bg-red-100 text-red-800">required</Badge>}
              <span className="text-gray-600">{param.description}</span>
            </div>
          ))}
        </div>
      </div>
    )}

    {endpoint.requestBody && (
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Request Body</h4>
        {endpoint.requestBody.required && (
          <Badge className="bg-red-100 text-red-800 mb-2">Required</Badge>
        )}
        {endpoint.requestBody.example && (
          <CodeBlock title="Example">
            {JSON.stringify(endpoint.requestBody.example, null, 2)}
          </CodeBlock>
        )}
      </div>
    )}

    {endpoint.responses && (
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Responses</h4>
        <div className="space-y-3">
          {Object.entries(endpoint.responses).map(([statusCode, response]) => (
            <div key={statusCode}>
              <div className="flex items-center gap-2 mb-2">
                <Badge 
                  className={
                    statusCode.startsWith('2') 
                      ? 'bg-green-100 text-green-800' 
                      : statusCode.startsWith('4')
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }
                >
                  {statusCode}
                </Badge>
                <span className="text-sm text-gray-600">{response.description}</span>
              </div>
              {response.example && (
                <CodeBlock>
                  {JSON.stringify(response.example, null, 2)}
                </CodeBlock>
              )}
            </div>
          ))}
        </div>
      </div>
    )}
  </Card>
);

export default function ApiDocumentation({ endpoints, title = "API Documentation", description }: ApiDocumentationProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        {description && (
          <p className="text-gray-600 text-lg">{description}</p>
        )}
      </div>

      <div className="space-y-6">
        {endpoints.map((endpoint, index) => (
          <EndpointCard key={index} endpoint={endpoint} />
        ))}
      </div>
    </div>
  );
}

export type { ApiEndpoint, ApiDocumentationProps };