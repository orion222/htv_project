import ApiDocumentation, { ApiEndpoint } from "@/components/ui/api-documentation";

const endpoints: ApiEndpoint[] = [
  {
    method: 'GET',
    path: '/marker',
    description: 'Gets all markers currently in the database',
    responses: {
      '200': {
        description: 'Successfully retrieved all markers',
        example: [
          {
            "id": "1",
            "position": [51.52016005, -0.16030636023550826],
            "description": "Cat in the hat is lost",
            "title": "Lost Cat",
            "urgency": "High",
            "category": "Crime",
            "status": "Active",
            "address": {
              "street": "Beck Dr",
              "city": "Markham",
              "state": "Ontario",
              "postal_code": "",
              "country": "Canada"
            },
            "createdAt": "2025-10-05T10:30:00Z",
            "updatedAt": "2025-10-05T10:30:00Z"
          }
        ]
      }
    }
  },
  {
    method: 'POST',
    path: '/marker',
    description: 'Create a new marker with required fields',
    requestBody: {
      required: true,
      schema: {
        type: 'object',
        required: ['position', 'description', 'title', 'urgency', 'category', 'address'],
        properties: {
          position: {
            type: 'array',
            items: { type: 'number' },
            description: 'Latitude and longitude coordinates'
          },
          description: { type: 'string' },
          title: { type: 'string' },
          urgency: { 
            type: 'string',
            enum: ['Low', 'Medium', 'High', 'Critical']
          },
          category: { 
            type: 'string',
            enum: ['Crime', 'Infrastructure', 'Environment', 'Public Safety', 'Other']
          },
          address: {
            type: 'object',
            properties: {
              street: { type: 'string' },
              city: { type: 'string' },
              state: { type: 'string' },
              postal_code: { type: 'string' },
              country: { type: 'string' }
            }
          }
        }
      },
      example: {
        "position": [51.52016005, -0.16030636023550826],
        "description": "Cat in the hat is lost",
        "title": "Lost Cat",
        "urgency": "High",
        "category": "Crime",
        "address": {
          "street": "Beck Dr",
          "city": "Markham",
          "state": "Ontario",
          "postal_code": "",
          "country": "Canada"
        }
      }
    },
    responses: {
      '201': {
        description: 'Marker created successfully',
        example: {
          "id": "2",
          "position": [51.52016005, -0.16030636023550826],
          "description": "Cat in the hat is lost",
          "title": "Lost Cat",
          "urgency": "High",
          "category": "Crime",
          "status": "Active",
          "address": {
            "street": "Beck Dr",
            "city": "Markham",
            "state": "Ontario",
            "postal_code": "",
            "country": "Canada"
          },
          "createdAt": "2025-10-05T10:30:00Z",
          "updatedAt": "2025-10-05T10:30:00Z"
        }
      },
      '400': {
        description: 'Bad request - missing required fields or invalid data',
        example: {
          "error": "Validation failed",
          "message": "Missing required field: position",
          "details": {
            "field": "position",
            "code": "REQUIRED_FIELD_MISSING"
          }
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/submit-report-gemini',
    description: 'Submit a report description to Gemini AI for automated report generation. Returns a structured report object based on the description provided.',
    requestBody: {
      required: true,
      schema: {
        type: 'object',
        required: ['description'],
        properties: {
          description: {
            type: 'string',
            description: 'Natural language description of the report/incident'
          }
        }
      },
      example: {
        "description": "There's a large pothole on Main Street near the intersection with Oak Avenue that's causing damage to cars"
      }
    },
    responses: {
      '200': {
        description: 'Successfully generated report from description',
        example: {
          "report": {
            "category": "Infrastructure",
            "position": [43.6532, -79.3832],
            "title": "Large Pothole Report",
            "urgency": "Medium",
            "description": "Large pothole on Main Street near Oak Avenue intersection causing vehicle damage",
            "address": {
              "street": "Main Street & Oak Avenue",
              "city": "Toronto",
              "state": "Ontario",
              "postal_code": "M5V 1A1",
              "country": "Canada"
            }
          }
        }
      },
      '400': {
        description: 'Bad request - missing or invalid description',
        example: {
          "error": "Validation failed",
          "message": "Description is required",
          "details": {
            "field": "description",
            "code": "REQUIRED_FIELD_MISSING"
          }
        }
      },
      '500': {
        description: 'Internal server error - AI processing failed',
        example: {
          "error": "AI Processing Error",
          "message": "Failed to process report with Gemini AI",
          "details": {
            "code": "GEMINI_API_ERROR"
          }
        }
      }
    }
  }
];

export default function ApiPage() {
  return (
    <div className="container mx-auto py-8">
      <ApiDocumentation 
        endpoints={endpoints}
        title="Marker API Documentation"
        description="REST API endpoints for managing location markers in the system"
      />
    </div>
  );
}
