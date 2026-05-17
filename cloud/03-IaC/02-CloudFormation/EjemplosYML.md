# Ejemplos de Recursos (Generados por grok)

### Ejemplo para Instancia EC2 

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Resources:
  MyEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      InstanceType: t2.micro
      ImageId: ami-0abcdef1234567890
      KeyName: !Ref KeyPairName
      SecurityGroups:
        - !Ref MySecurityGroup
      Tags:
        - Key: Name
          Value: MyEC2Instance
  MySecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Enable SSH and HTTP/HTTPS
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 22
          ToPort: 22
          CidrIp: 0.0.0.0/0
        - IpProtocol: tcp
          FromPort: 80
          ToPort: 80
          CidrIp: 0.0.0.0/0
        - IpProtocol: tcp
          FromPort: 443
          ToPort: 443
          CidrIp: 0.0.0.0/0
```


## Otro ejemplo con EIP:

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Resources:
  MyEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      InstanceType: t2.micro
      ImageId: ami-0abcdef1234567890
      KeyName: !Ref KeyPairName
      SecurityGroups:
        - !Ref MySecurityGroup
      Tags:
        - Key: Name
          Value: MyEC2Instance
  MySecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Enable SSH and HTTP/HTTPS
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 22
          ToPort: 22
          CidrIp: 0.0.0.0/0
        - IpProtocol: tcp
          FromPort: 80
          ToPort: 80
          CidrIp: 0.0.0.0/0
        - IpProtocol: tcp
          FromPort: 443
          ToPort: 443
          CidrIp: 0.0.0.0/0
  MyElasticIP:
    Type: AWS::EC2::EIP
    Properties:
      Domain: vpc
  EIPAssociation:
    Type: AWS::EC2::EIPAssociation
    Properties:
      InstanceId: !Ref MyEC2Instance
      EIP: !Ref MyElasticIP
Outputs:
  WebsiteURL:
    Value: !Sub
      - http://${PublicIP}
      - PublicIP: !GetAtt MyElasticIP.PublicIp
```

## Ejemplo para Bucket S3

```yaml
# Ejemplo para hosting de sitio web:
AWSTemplateFormatVersion: 2010-09-09
Resources:
  S3Bucket:
    Type: AWS::S3::Bucket
    Properties:
      PublicAccessBlockConfiguration:
        BlockPublicAcls: false
        BlockPublicPolicy: false
        IgnorePublicAcls: false
        RestrictPublicBuckets: false
      WebsiteConfiguration:
        IndexDocument: index.html
        ErrorDocument: error.html
    DeletionPolicy: Retain
    UpdateReplacePolicy: Retain
  BucketPolicy:
    Type: AWS::S3::BucketPolicy
    Properties:
      PolicyDocument:
        Id: MyPolicy
        Version: 2012-10-17
        Statement:
          - Sid: PublicReadForGetBucketObjects
            Effect: Allow
            Principal: '*'
            Action: s3:GetObject
            Resource:
              Fn::Join:
                - ''
                - - 'arn:aws:s3:::'
                  - !Ref S3Bucket
                  - /*
      Bucket:
        Ref: S3Bucket
Outputs:
  WebsiteURL:
    Value:
      Fn::GetAtt:
        - S3Bucket
        - WebsiteURL
    Description: URL para sitio web hospedado en S3
  S3BucketSecureURL:
    Value:
      Fn::Join:
        - ''
        - - 'https://'
          - !GetAtt
            - S3Bucket
            - DomainName
    Description: Nombre del bucket S3 para contener contenido del sitio web
```


## Ejemplo para VPC

```yaml
Description: Esta plantilla despliega un VPC, con un par de subredes publicas y privadas distribuidas en dos Zonas de Disponibilidad. Despliega un internet gateway, con una ruta predeterminada en las subredes publicas. Despliega un par de NAT gateways (uno en cada AZ), y rutas predeterminadas para ellas en las subredes privadas.

Parameters:
  EnvironmentName:
    Description: Un nombre de entorno que se prefixa a nombres de recursos
    Type: String

  VpcCIDR:
    Description: Por favor ingresa el rango IP (notacion CIDR) para este VPC
    Type: String
    Default: 10.192.0.0/16

  PublicSubnet1CIDR:
    Description: Por favor ingresa el rango IP (notacion CIDR) para la subred publica en la primera Zona de Disponibilidad
    Type: String
    Default: 10.192.10.0/24

  PublicSubnet2CIDR:
    Description: Por favor ingresa el rango IP (notacion CIDR) para la subred publica en la segunda Zona de Disponibilidad
    Type: String
    Default: 10.192.11.0/24

  PrivateSubnet1CIDR:
    Description: Por favor ingresa el rango IP (notacion CIDR) para la subred privada en la primera Zona de Disponibilidad
    Type: String
    Default: 10.192.20.0/24

  PrivateSubnet2CIDR:
    Description: Por favor ingresa el rango IP (notacion CIDR) para la subred privada en la segunda Zona de Disponibilidad
    Type: String
    Default: 10.192.21.0/24

Resources:
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: !Ref VpcCIDR
      EnableDnsSupport: true
      EnableDnsHostnames: true
      Tags:
        - Key: Name
          Value: !Ref EnvironmentName

  InternetGateway:
    Type: AWS::EC2::InternetGateway
    Properties:
      Tags:
        - Key: Name
          Value: !Ref EnvironmentName

  InternetGatewayAttachment:
    Type: AWS::EC2::VPCGatewayAttachment
    Properties:
      InternetGatewayId: !Ref InternetGateway
      VpcId: !Ref VPC

  PublicSubnet1:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref VPC
      AvailabilityZone: !Select [ 0, !GetAZs '' ]
      CidrBlock: !Ref PublicSubnet1CIDR
      MapPublicIpOnLaunch: true
      Tags:
        - Key: Name
          Value: !Sub ${EnvironmentName} Subred Publica (AZ1)

  # ... (el resto de la plantilla continua como en el contenido original, para brevedad)

Outputs:
  VPC:
    Description: Una referencia al VPC creado
    Value: !Ref VPC

  # ... (outputs continuan)
```



# Ejemplos de Nested Stacks (Generados por grok)


## Ejemplo 1: Antes de Anidar (Plantilla Grande unica)

```yaml
AWSTemplateFormatVersion: 2010-09-09
Parameters:
  InstanceType:
    Type: String
    Default: t2.micro
    Description: El tipo de instancia EC2
  Environment:
    Type: String
    Default: Production
    Description: El entorno de despliegue
Resources:
  MyEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-1234567890abcdef0
      InstanceType: !Ref InstanceType
  MyS3Bucket:
    Type: AWS::S3::Bucket
```


## Ejemplo 2: Despues de Anidar (Dividido en Nested Stacks)

```yaml
AWSTemplateFormatVersion: 2010-09-09
Resources:
  MyFirstNestedStack:
    Type: AWS::CloudFormation::Stack
    Properties:
      TemplateURL: https://s3.amazonaws.com/amzn-s3-demo-bucket/first-nested-stack.yaml
      Parameters:
        InstanceType: t3.micro
  MySecondNestedStack:
    Type: AWS::CloudFormation::Stack
    Properties:
      TemplateURL: https://s3.amazonaws.com/amzn-s3-demo-bucket/second-nested-stack.yaml
      Parameters:
        Environment: Testing
      DependsOn: MyFirstNestedStack
```


## Ejemplo 3: Plantilla de Nested Stack (para una Funcion Lambda)

```yaml
AWSTemplateFormatVersion: 2010-09-09
Description: Plantilla de nested stack para despliegue de funcion Lambda
Parameters:
  MemorySize:
    Type: Number
    Default: 128
    MinValue: 128
    MaxValue: 10240
    Description: Asignacion de memoria para la funcion Lambda (128-10240 MB)
Resources:
  LambdaFunction:
    Type: AWS::Lambda::Function
    Properties:
      FunctionName: !Sub "${AWS::StackName}-Function"
      Runtime: nodejs18.x
      Handler: index.handler
      Role: !GetAtt LambdaExecutionRole.Arn
      Code:
        ZipFile: |
          exports.handler = async (event) => {
            return {
              statusCode: 200,
              body: JSON.stringify('Hello from Lambda!')
            };
          };
      MemorySize: !Ref MemorySize
  LambdaExecutionRole:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: lambda.amazonaws.com
            Action: sts:AssumeRole
      ManagedPolicyArns:
        - 'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole'
Outputs:
  LambdaArn:
    Description: ARN de la funcion Lambda creada
    Value: !GetAtt LambdaFunction.Arn
```


## Ejemplo 4: Stack de Nivel Superior (Root) Referenciando el Nested Stack

```yaml
AWSTemplateFormatVersion: 2010-09-09
Description: Plantilla de stack de nivel superior que despliega un nested stack
Resources:
  NestedStack:
    Type: AWS::CloudFormation::Stack
    Properties:
      TemplateURL: /path_to_template/nested-template.yaml
      Parameters:
        MemorySize: 256
Outputs:
  NestedStackLambdaArn:
    Description: ARN de la funcion Lambda del nested stack
    Value: !GetAtt NestedStack.Outputs.LambdaArn
```


## Ejemplo 5: Nested Stack con Parametros

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Resources:
  myStackWithParams:
    Type: AWS::CloudFormation::Stack
    Properties:
      TemplateURL: https://s3.amazonaws.com/cloudformation-templates-us-east-1/EC2ChooseAMI.template
      Parameters:
        InstanceType: t2.micro
        KeyName: mykey
```


## Ejemplo 6: Nested Stack con Outputs

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Resources:
  myStack:
    Type: AWS::CloudFormation::Stack
    Properties:
      TemplateURL: https://s3.amazonaws.com/cloudformation-templates-us-east-1/S3_Bucket.template
      TimeoutInMinutes: '60'
Outputs:
  StackRef:
    Value: !Ref myStack
  OutputFromNestedStack:
    Value: !GetAtt myStack.Outputs.BucketName
```