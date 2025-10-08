import { View } from "react-native";
import Header from "./header";
import BalanceCard from "./balance";
import PaymentList from "./paymentlist";

export default function Home() {
  return (
    <View>
      <Header />
      <BalanceCard />
      <PaymentList />
    </View>
  );
}
