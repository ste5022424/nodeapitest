# nodeapitest1

## 1. Run Server

```bash
docker-compose up -d
```

## 2.Post

### Request

> <http://localhost:3000/admin/auth>

### Reseponse
```json
{
  "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im1lbWJlcmlkIjoxMjM0NTYsImdyb3VwaWQiOjF9LCJleHAiOjE1NjEwMzE1NDEsImlhdCI6MTU2MTAyNzk0MX0.CtUdLSMnfjYtPxepWiX6eMPea924sBLmg-bVBpeD-w8"
}
```

## 3. Get

### Set http header

```bash
authorization = toekn
```

### Request

> http://localhost:3000/admin/GetTokenData

### Reseponse

```json
{
  "memberid": 123456,
  "groupid": 1,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im1lbWJlcmlkIjoxMjM0NTYsImdyb3VwaWQiOjF9LCJleHAiOjE1NjEwMjk3MjcsImlhdCI6MTU2MTAyNjEyN30.We46F3OFzhcM7KeRYcXMMsJVOQYgs5Fsngvn4dyhdRI",
  "msg": "TokenOk"
}
```
