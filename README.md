[![CircleCI](https://circleci.com/gh/srajat84/alpaca/tree/master.svg?style=shield)](https://circleci.com/gh/srajat84/alpaca/tree/master) [![Gitter](https://badges.gitter.im/alpaca-eip/community.svg)](https://gitter.im/alpaca-eip/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![DeepScan grade](https://deepscan.io/api/teams/5679/projects/7514/branches/77626/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5679&pid=7514&bid=77626)

# alpaca

Alpaca is an open source integration framework that empowers you to quickly and easily integrate various systems consuming or producing data

# PATTERNS

Based on Enterprise Integration Patterns to help you solve your integration problem by applying best practices out of the box. Alpaca supports most of the Enterprise Integration Patterns from the excellent book by Gregor Hohpe and Bobby Woolf.

# COMPONENTS

Packed with several hundred components that are used to access databases, message queues, APIs or basically anything under the sun. Helping you integrate with everything.

# DATA FORMATS

It supports multiple data formats, allowing to translate messages in multiple formats.

# Examples

The Alpaca DSL should look something like this:

```typescript
const alpacaContext = new AlpacaContext();

const route = from(source)
  .choice()
  .when(condition)
  .to(endpoint)
  .otherwise()
  .to(anotherEndpoint)
  .end();

alpacaContext.add(route);

const kafkaToLambdaRoute = from("kafka://<host>/<topic>?prop1=val1;prop2=val2")
  .transform(new CustomerTransformer())
  .to("lambda://<function-name>")
  .end();

alpacaContext.add(kafkaToLambdaRoute);

alpacaContext.start();
```
