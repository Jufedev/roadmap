# Anatomía de una Plantilla de CloudFormation (Formato YAML)

## 1. `AWSTemplateFormatVersion`

- **Propósito**: Especifica la versión del formato de la plantilla de CloudFormation que se usa.

- **Uso**: Clave de nivel superior requerida. Asegura compatibilidad con el servicio de CloudFormation.

- **Ejemplo (YAML)**:
    - ```yaml
        AWSTemplateFormatVersion: '2010-09-09'
      ```

Notas: La versión más comúnmente usada es '2010-09-09'. Debe ser la primera línea en la plantilla.


## 2. `Description`

- **Propósito**: Proporciona una descripción textual del propósito o contenidos de la plantilla.

- **Uso**: Opcional. Ayuda a los usuarios a entender la intención de la plantilla.

- **Ejemplo (YAML)**:
    - ```yaml
        Description: 'Depliega un VPC con subredes públicas y privadas'
      ```


## 3. `Metadata`

- **Propósito**: Contiene información adicional sobre la plantilla que no es usada directamente por CloudFormation pero puede consumirse por herramientas o recursos personalizados.

- **Uso**: Opcional. Útil para documentación, herramientas o procesamiento personalizado.

- **Ejemplo (YAML)**:
    - ```yaml
        Metadata:
            TemplateAuthor: 'team@example.com'
            DeploymentDate: '2025-04-05'
      ```


## 4. `Parameters`

- **Propósito**: Declara valores de entrada que pueden proporcionarse al crear o actualizar un stack, haciendo las plantillas reutilizables y configurables.

- **Uso**: Opcional pero altamente recomendado. Los parámetros pueden referenciarse en Resources, Conditions y Outputs.

- **Ejemplo (YAML)**:
    - ```yaml
        Parameters:
            InstanceType:
                Type: String
                Default: t3.micro
                AllowedValues:
                - t3.micro
                - t3.small
                Description: Tipo de instancia EC2
            Environment:
                Type: String
                AllowedValues:
                - dev
                - prod
      ```


## 5. `Mappings`

- **Propósito**: Define tablas de búsqueda (pares clave-valor) para datos de configuración estática, como configuraciones específicas de región o entorno.

- **Uso**: Opcional. Usado con la función intrínseca Fn::FindInMap para recuperar valores dinámicamente.

- **Ejemplo (YAML)**:
    - ```yaml
        Mappings:
            AWSRegionArch2AMI:
                us-east-1:
                    HVM64: ami-0abcdef1234567890
                us-west-2:
                    HVM64: ami-0fedcba0987654321
      ```
- Uso en Resources:
    - ```yaml
        InstanceType: !FindInMap [AWSRegionArch2AMI, !Ref AWS::Region, HVM64]
      ```


## 6. `Conditions`

- **Propósito**: Define expresiones booleanas que determinan si ciertos recursos o propiedades se crean o configuran.

- **Uso**: Opcional. Las condiciones se evalúan durante la creación/actualización del stack y pueden referenciar parámetros u otras condiciones.

- **Ejemplo (YAML)**:
    - ```yaml
        Conditions:
            CreateProdResources: !Equals [!Ref Environment, prod]
            IsDevEnvironment: !Not [!Condition CreateProdResources]
      ```

- Uso en Resources:
    - ```yaml
        MyProdBucket:
            Condition: CreateProdResources
            Type: AWS::S3::Bucket
            Properties:
                AccessControl: PublicRead
      ```


## 7. `Transform`

- **Propósito**: Instruye a CloudFormation a procesar la plantilla usando una transformación específica, como AWS SAM para aplicaciones serverless o AWS::Include para plantillas modulares.

- **Uso**: Opcional. Aplicado a nivel superior para modificar cómo se interpreta la plantilla.

- **Ejemplo (YAML)**:
    - ```yaml
        Transform: AWS::Serverless-2016-10-31
      ```
    
    o

    - ```yaml  
        Transform: AWS::Include
        Parameters:
            Location: ./snippets/vpc.yaml
      ```


## 8. `Resources`

- **Propósito**: La sección núcleo donde se definen recursos de AWS (por ejemplo, instancias EC2, buckets S3, VPCs).

- **Uso**: Requerida. Cada recurso tiene un ID lógico, tipo y propiedades.

- **Ejemplo (YAML)**:
    - ```yaml
        Resources:
            MyVPC:
                Type: AWS::EC2::VPC
                Properties:
                    CidrBlock: 10.0.0.0/16
                    EnableDnsHostnames: true
                    Tags:
                        - Key: Name
                        Value: !Sub ${AWS::StackName}-VPC
      ```


## 9. `Outputs`

- **Propósito**: Declara valores retornados al describir un stack, como IDs de recursos, URLs u otra información útil.

- **Uso**: Opcional. Los outputs pueden referenciar atributos de recursos o pseudo-parámetros.

- **Ejemplo (YAML)**:
    - ```yaml
        Outputs:
            VPCId:
                Description: El ID del VPC creado
                Value: !Ref MyVPC
            WebsiteURL:
                Description: URL del sitio web S3
                Value: !GetAtt MyBucket.WebsiteURL
      ```


## 10. `Rules`

- **Propósito**: Valida valores de parámetros o combinaciones durante la creación/actualización del stack para enforces restricciones.

- **Uso**: Opcional. Ayuda a prevenir configuraciones inválidas.

- **Ejemplo (YAML)**:
    - ```yaml
        Rules:
        - Rule: CheckInstanceType
            Assertions:
            - Assert: !Not [ !Equals [!Ref InstanceType, t2.micro] ]
                AssertDescription: t2.micro no está permitido
        - Rule: EnvironmentCheck
            Assertions:
            - Assert: !Or [ !Condition IsDevEnvironment, !Condition CreateProdResources ]
      ```
