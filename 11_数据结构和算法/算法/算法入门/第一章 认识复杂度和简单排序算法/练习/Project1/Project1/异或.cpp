#include <iostream>
#include <string>

using namespace std;

void XOR();
void FindOdd();
void FindOddWhileTwo();

int main() {
	/*XOR();*/
	cout << endl;
	/*FindOdd();*/
	cout << endl;
	FindOddWhileTwo();
	return 0;
}
void XOR() {
	int a = 1;
	int b = 2;
	a = a ^ b;
	b = a ^ b;
	a = a ^ b;
	cout << "a:" << a << endl;
	cout << "b:" << b << endl;
}

//一个数组中有一种数出现了奇数次，其他数都出现了偶数次，怎么找到这一个数
void FindOdd() {
	const int size = 7;
	int arr[size] = { 2, 3, 2, 8, 1, 3, 8 };
	int res = 0;
	for (int i = 0; i < size ; i++)
	{
		res = res ^ arr[i];
	}
	cout << "res:" << res << endl;
}

//一个数组中有两种数出现了奇数次，其他数都出现了偶数次，怎么找到这两个数

void FindOddWhileTwo() {
	const int size = 8;
	int arr[size] = { 2, 3, 2, 8, 1, 3, 8, 5 };
	int res = 0;
	int a = 0;
	for (int i = 0; i < size; i++)
	{
		res = res ^ arr[i];
	}	
	int pattern = (res & (~res + 1));
	cout << pattern << endl;
	for (int i = 0; i < size; i++)
	{
		if ((pattern & arr[i]) != 0) {
			a = a ^ arr[i];
		}
	}
	int b = res ^ a;
	cout <<"a:"<< a << endl;
	cout <<"b:"<< b << endl;
}