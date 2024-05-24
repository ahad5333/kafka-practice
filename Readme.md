

## Overview

This project demonstrates the use of Apache Kafka to handle high throughput and ensure real-time data processing for applications. As transaction per second (TPS) rates increase, traditional databases may struggle to keep up, leading to performance issues and a suboptimal user experience. Kafka can manage these high TPS scenarios, ensuring a seamless and real-time experience for users.

## Why Kafka?

To overcome the problem of high throughput per second, we need Kafka. As TPS (transactions per second) increase, traditional databases may go down and fail to provide a real-time experience. Kafka can handle high TPS, ensuring a real-time environment for users of applications such as Zomato, Uber, and others.

## Note:
kafka thoughput is high but storage is low
whereas database has high storage and thoughput is low. Combination of kafka and db will create good use while thoughput and storage unit also.


### Key Benefits of Kafka

- **High Throughput:** Kafka is capable of handling thousands of messages per second.
- **Scalability:** Kafka is highly scalable, allowing it to grow with your data needs.
- **Durability:** Kafka ensures data is stored safely and reliably.
- **Real-Time Processing:** Kafka enables real-time processing of data, making it ideal for applications requiring immediate insights.

## How to Use This Project

### Prerequisites

- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html) (Kafka requires Java)
- [Apache Kafka](https://kafka.apache.org/downloads)
- [Zookeeper](https://zookeeper.apache.org/releases.html) (Kafka requires Zookeeper)

### Installation

1. **Download and Install Kafka:**

    Download Kafka from the [official website](https://kafka.apache.org/downloads). Extract the archive and move to the Kafka directory.

2. **Start Zookeeper:**

    Kafka uses Zookeeper to manage distributed brokers. Start Zookeeper with:

    ```sh
    bin/zookeeper-server-start.sh config/zookeeper.properties
    ```

3. **Start Kafka Server:**

    Start the Kafka server with:

    ```sh
    bin/kafka-server-start.sh config/server.properties
    ```

4. **Create a Topic:**

    Create a topic named `test` with:

    ```sh
    bin/kafka-topics.sh --create --topic test --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
    ```

5. **Send Messages:**

    Start a producer to send messages to the `test` topic:

    ```sh
    bin/kafka-console-producer.sh --topic test --bootstrap-server localhost:9092
    ```

    Type your messages in the console.

6. **Consume Messages:**

    Start a consumer to read messages from the `test` topic:

    ```sh
    bin/kafka-console-consumer.sh --topic test --bootstrap-server localhost:9092 --from-beginning
    ```

### Example Applications

- **Zomato:** Real-time order tracking and updates.
- **Uber:** Real-time ride tracking and updates.

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [your-email@example.com].

