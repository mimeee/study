#include <iostream>
#include <string>

using namespace std;

void ChoiceSort();
void BubbleSort();
void InsertSort();
int _main();
int _main() {
	ChoiceSort();
	cout<< ""<<endl;
	BubbleSort();
	cout << "" << endl;
	InsertSort();
	return 0;
}
//Ñ¡ÔñÅÅÐò
void ChoiceSort() {
	int arr[5] = { 1,3,5,7,9 };
	for (int i = 0; i < 5; i++) {
		int index = i;
		for (int j = i + 1; j < 5; j++) {
			index = arr[j] < arr[index] ? j : index;
		}
		int temp = 0;
		temp = arr[i];
		arr[i] = arr[index];
		arr[index] = temp;
	}
	for (int i = 0; i < 5; i++) {
		cout << arr[i];
	}
}

//Ã°ÅÝÅÅÐò
void BubbleSort() {
	int arr[5] = { 1,3,5,7,9 };
	for (int i = 0; i < 5; i++) {
		for (int j = i; j < 5; j++) {
			if (arr[j] > arr[i]) {
				int temp = 0;
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	for (int i = 0; i < 5; i++) {
		cout << arr[i];
	}
}

//²åÈëÅÅÐò
void InsertSort() {
	int arr[5] = { 1,3,5,7,9 };
	for (int i = 1; i < 5; i++) {
		for (int j = i - 1; j >= 0 && arr[j + 1] > arr[j]; j--) {
			int temp = 0;
			temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		}
	}
	for (int i = 0; i < 5; i++) {
		cout << arr[i];
	}
}